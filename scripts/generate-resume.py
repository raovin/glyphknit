#!/usr/bin/env python3
"""Generate the public PDF from the same content used by the resume page.

Requires Node.js 22.6+ and ReportLab. Run: python3 scripts/generate-resume.py
"""

import json
import subprocess
from pathlib import Path
from xml.sax.saxutils import escape

from reportlab.lib import colors
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import (
    BaseDocTemplate, Frame, KeepTogether, PageBreak, PageTemplate, Paragraph, Spacer,
)

ROOT = Path(__file__).resolve().parents[1]
source = """
const experience = await import('./content/experience.ts');
const {siteConfig} = await import('./content/site.ts');
process.stdout.write(JSON.stringify({...experience, siteConfig}));
"""
data = json.loads(subprocess.check_output(
    ["node", "--disable-warning=MODULE_TYPELESS_PACKAGE_JSON", "--experimental-strip-types", "--input-type=module", "-e", source],
    cwd=ROOT, text=True,
))
output = ROOT / "public" / "resume.pdf"
INK = colors.HexColor("#172b31")
MUTED = colors.HexColor("#485b62")
ACCENT = colors.HexColor("#176655")
LINE = colors.HexColor("#cbd9d6")
styles = {
    "name": ParagraphStyle("Name", fontName="Helvetica-Bold", fontSize=30, leading=33, textColor=INK, spaceAfter=7),
    "title": ParagraphStyle("Title", fontName="Helvetica", fontSize=15, leading=19, textColor=ACCENT, spaceAfter=10),
    "body": ParagraphStyle("Body", fontName="Helvetica", fontSize=10, leading=14, textColor=INK, spaceAfter=7),
    "section": ParagraphStyle("Section", fontName="Helvetica-Bold", fontSize=10, leading=13, textColor=ACCENT, spaceBefore=15, spaceAfter=10),
    "heading": ParagraphStyle("Heading", fontName="Helvetica-Bold", fontSize=12, leading=16, textColor=INK, spaceAfter=4),
    "meta": ParagraphStyle("Meta", fontName="Helvetica", fontSize=9, leading=12, textColor=MUTED, spaceAfter=6),
    "small": ParagraphStyle("Small", fontName="Helvetica", fontSize=8.5, leading=12, textColor=MUTED, spaceAfter=6),
    "bullet": ParagraphStyle("Bullet", fontName="Helvetica", fontSize=9.5, leading=13.5, textColor=INK, leftIndent=10, firstLineIndent=-10, spaceAfter=5),
    "outcome": ParagraphStyle("Outcome", fontName="Helvetica-Bold", fontSize=9.5, leading=13, textColor=ACCENT, spaceAfter=5),
}


def p(text, style="body"):
    return Paragraph(escape(text), styles[style])


def link(label, url):
    return f'<link href="{escape(url)}" color="#176655">{escape(label)}</link>'


def section(label):
    return p(label.upper(), "section")


def job(item):
    return KeepTogether([
        p(item["publicLabel"], "heading"),
        p(item["title"], "body"),
        p(f'{item["period"]} | {item["location"]}', "meta"),
        *[p("- " + bullet, "bullet") for bullet in item["bullets"]],
        p(" / ".join(item["stack"]), "small"),
        Spacer(1, 7),
    ])


profile = data["resumeProfile"]
site = data["siteConfig"]


def page(canvas, doc):
    canvas.saveState()
    canvas.setTitle(f'{profile["name"]} | {profile["title"]}')
    canvas.setAuthor(profile["name"])
    canvas.setSubject("Public resume: selected project work, career history, technical skills, and education")
    canvas.setKeywords("QA, SDET, test automation, API validation, quality engineering")
    canvas.setCreator("GlyphKnit Solutions LLC")
    canvas.setStrokeColor(ACCENT)
    canvas.setLineWidth(2)
    canvas.line(44, 751, 568, 751)
    canvas.setFont("Helvetica", 8)
    canvas.setFillColor(MUTED)
    canvas.drawString(44, 765, "GLYPHKNIT / VIN RAO")
    canvas.drawRightString(568, 765, "PROJECTS & EXPERIENCE" if doc.page == 1 else "CAREER HISTORY & CAPABILITIES")
    canvas.setStrokeColor(LINE)
    canvas.setLineWidth(0.5)
    canvas.line(44, 40, 568, 40)
    canvas.drawString(44, 26, site["domain"] + " / " + site["email"])
    canvas.drawRightString(568, 26, f"{doc.page} / 2")
    canvas.restoreState()


doc = BaseDocTemplate(str(output), pagesize=letter, title=f'{profile["name"]} | {profile["title"]}', author=profile["name"])
doc.addPageTemplates(PageTemplate(id="resume", frames=[Frame(44, 51, 524, 684, leftPadding=0, rightPadding=0, topPadding=0, bottomPadding=0)], onPage=page))

story = [p(profile["name"], "name"), p(profile["title"], "title")]
story.append(Paragraph("  |  ".join([
    link(site["email"], "mailto:" + site["email"]),
    link(site["domain"], site["canonicalUrl"]),
    link("github.com/raovin", site["githubUrl"]),
]), styles["small"]))
story.extend([p(profile["summary"]), section("Selected projects")])
for project in data["resumeProjects"]:
    story.append(KeepTogether([
        p(project["title"], "heading"),
        p(project["summary"]),
        p(project["outcome"], "outcome"),
        Paragraph(link("Project details", site["canonicalUrl"] + project["href"]) + "  |  " + escape(" / ".join(project["stack"])), styles["small"]),
        Spacer(1, 7),
    ]))
story.extend([section("Current ownership"), job(data["experience"][0]), PageBreak(), section("Earlier employment")])
for item in data["experience"][1:]:
    story.append(job(item))
story.append(section("Technical skills"))
for group in data["resumeSkills"]:
    story.append(Paragraph("<b>" + escape(group["title"]) + ":</b> " + escape(", ".join(group["items"])), styles["body"]))
education = data["education"]
story.extend([
    section("Education"),
    p(education["degree"], "heading"),
    p(education["institution"], "body"),
    p(education["period"] + " | " + education["location"], "meta"),
])
doc.build(story)
print(output)
