const pptxgen = require('pptxgenjs');
const path = require('path');

/**
 * GRR PITCH DECK v5 - ENHANCED
 * 
 * Design Philosophy: "Coastal Grit" 
 * - Blends luxury athletic with editorial design
 * - Bold asymmetric layouts
 * - Strong orange color dominance
 * - Premium typography hierarchy
 * 
 * SKILLS APPLIED:
 * - canvas-design: Meticulous craftsmanship, minimal text as visual accent
 * - frontend-design: Asymmetry, controlled negative space, visual memorability
 * - copy-editing: Heightened emotion, specificity, "so what" benefits
 */

async function createEnhancedDeck() {
    const pptx = new pptxgen();
    pptx.layout = 'LAYOUT_16x9';
    pptx.author = 'GRR';
    pptx.title = 'GRR Pitch Deck - Enhanced';
    pptx.subject = 'Gather. Rest. Rise.';

    // Brand colors
    const ORANGE = 'C2561C';
    const CREAM = 'F5F2EB';
    const BLACK = '1A1A1A';
    const DARK_ORANGE = '9A4515';

    const brandDir = path.join(__dirname, '..', 'brand');

    // ============ SLIDE 1: HERO TITLE ============
    // Design: Full-impact asymmetric - logo left, bold typography right
    let slide = pptx.addSlide();
    slide.background = { color: CREAM };

    // Orange accent bar (left edge) - asymmetric
    slide.addShape(pptx.shapes.RECTANGLE, {
        x: 0, y: 0, w: 0.15, h: 5.63,
        fill: { color: ORANGE }
    });

    // Hero image positioned left
    slide.addImage({
        path: path.join(brandDir, 'logos/title_hero.png'),
        x: 0.5, y: 0.5, w: 4.5, h: 4.5
    });

    // Large typography on right (editorial style)
    slide.addText('GRR', {
        x: 5.3, y: 1.2, w: 4.5, h: 1.2,
        fontSize: 72, bold: true, color: ORANGE
    });

    slide.addText('GATHER\nREST\nRISE', {
        x: 5.3, y: 2.4, w: 4.5, h: 1.5,
        fontSize: 24, color: BLACK, lineSpacing: 28
    });

    slide.addText('Premium Lifestyle Apparel', {
        x: 5.3, y: 4.2, w: 4.5, h: 0.4,
        fontSize: 14, color: DARK_ORANGE
    });

    // Bottom accent line
    slide.addShape(pptx.shapes.RECTANGLE, {
        x: 5.3, y: 4.7, w: 2, h: 0.05,
        fill: { color: ORANGE }
    });

    // ============ SLIDE 2: BRAND STORY ============
    // Design: Split diagonal - cinematic feel
    slide = pptx.addSlide();
    slide.background = { color: BLACK };

    // Large orange shape (diagonal feel via positioning)
    slide.addShape(pptx.shapes.RECTANGLE, {
        x: 5.5, y: 0, w: 4.5, h: 5.63,
        fill: { color: ORANGE }
    });

    // Oversized number (editorial design)
    slide.addText('01', {
        x: 0.3, y: 0.2, w: 1.5, h: 0.8,
        fontSize: 48, bold: true, color: DARK_ORANGE
    });

    slide.addText('THE STORY', {
        x: 0.5, y: 0.9, w: 4.5, h: 0.5,
        fontSize: 14, bold: true, color: ORANGE
    });

    // Headline - large, impactful
    slide.addText('Two places.\nOne philosophy.', {
        x: 0.5, y: 1.5, w: 4.8, h: 1.2,
        fontSize: 32, bold: true, color: CREAM, lineSpacing: 40
    });

    // Body copy - refined
    slide.addText([
        { text: 'Wilmington, NC\n', options: { bold: true, color: ORANGE } },
        { text: 'Morning paddle-outs. Family dinners at sunset.\n\n' },
        { text: 'Austin, TX\n', options: { bold: true, color: ORANGE } },
        { text: 'Dawn gym sessions. Home for what matters.\n\n' },
        { text: 'For those who refuse to choose.', options: { bold: true } }
    ], {
        x: 0.5, y: 2.9, w: 4.8, h: 2.4,
        fontSize: 13, color: CREAM, valign: 'top'
    });

    // Image on orange side
    slide.addImage({
        path: path.join(brandDir, 'logos/title_hero.png'),
        x: 6, y: 1.3, w: 3.5, h: 3.5
    });

    // ============ SLIDE 3: THE PILLARS ============
    // Design: Horizontal rule emphasis, minimal
    slide = pptx.addSlide();
    slide.background = { color: CREAM };

    // Section number
    slide.addText('02', {
        x: 0.3, y: 0.2, w: 1.5, h: 0.8,
        fontSize: 48, bold: true, color: ORANGE
    });

    slide.addText('THE MEANING', {
        x: 0.5, y: 0.9, w: 4, h: 0.4,
        fontSize: 14, bold: true, color: DARK_ORANGE
    });

    // Three pillars - horizontal layout with accent lines
    const pillars = [
        {
            title: 'GATHER',
            desc: 'Family. Friends. Community.',
            detail: 'This is your fuel.'
        },
        {
            title: 'REST',
            desc: 'Recovery is strategy.',
            detail: 'Your best work follows rest.'
        },
        {
            title: 'RISE',
            desc: 'Stronger every day.',
            detail: 'Gym. Work. Family.'
        }
    ];

    pillars.forEach((p, i) => {
        const x = 0.5 + (i * 3.2);

        // Accent line above
        slide.addShape(pptx.shapes.RECTANGLE, {
            x: x, y: 1.6, w: 2.8, h: 0.06,
            fill: { color: ORANGE }
        });

        slide.addText(p.title, {
            x: x, y: 1.85, w: 2.8, h: 0.6,
            fontSize: 28, bold: true, color: BLACK
        });

        slide.addText(p.desc, {
            x: x, y: 2.55, w: 2.8, h: 0.5,
            fontSize: 14, bold: true, color: DARK_ORANGE
        });

        slide.addText(p.detail, {
            x: x, y: 3.1, w: 2.8, h: 0.8,
            fontSize: 12, color: BLACK
        });
    });

    // Bottom tagline
    slide.addText('Gather. Rest. Rise.', {
        x: 0, y: 4.8, w: 10, h: 0.4,
        fontSize: 18, bold: true, color: ORANGE, align: 'center'
    });

    // ============ SLIDE 4: THE COLLECTION ============
    // Design: Dark background, product focus
    slide = pptx.addSlide();
    slide.background = { color: BLACK };

    // Section number
    slide.addText('03', {
        x: 0.3, y: 0.15, w: 1.5, h: 0.7,
        fontSize: 42, bold: true, color: DARK_ORANGE
    });

    slide.addText('THE COLLECTION', {
        x: 0.5, y: 0.75, w: 4, h: 0.35,
        fontSize: 14, bold: true, color: ORANGE
    });

    // Price/quality line
    slide.addText('$45  •  100% Cotton  •  Premium Fit', {
        x: 5, y: 0.75, w: 4.5, h: 0.35,
        fontSize: 12, color: CREAM, align: 'right'
    });

    // 4 shirts in row
    const shirts = [
        { folder: 'shirt1', title: 'BEACH TRUCK' },
        { folder: 'shirt2', title: 'LONGHORN PIER' },
        { folder: 'shirt3', title: 'VINTAGE SKULL' },
        { folder: 'shirt4', title: 'WAVE + TEXAS' }
    ];

    shirts.forEach((s, i) => {
        const x = 0.4 + (i * 2.4);
        slide.addImage({
            path: path.join(brandDir, `tshirts/${s.folder}/back.png`),
            x: x, y: 1.3, w: 2.2, h: 2.7
        });
        slide.addText(s.title, {
            x: x, y: 4.1, w: 2.2, h: 0.35,
            fontSize: 10, bold: true, color: CREAM, align: 'center'
        });
    });

    // ILM x ATX
    slide.addText('ILM × ATX', {
        x: 0, y: 4.7, w: 10, h: 0.35,
        fontSize: 16, bold: true, color: ORANGE, align: 'center'
    });

    slide.addText('Two roots. One identity.', {
        x: 0, y: 5.05, w: 10, h: 0.3,
        fontSize: 11, color: CREAM, align: 'center'
    });

    // ============ SLIDES 5-8: INDIVIDUAL PRODUCTS ============
    const shirtDetails = [
        { folder: 'shirt1', num: '04', title: 'BEACH TRUCK', tagline: 'Vintage soul meets coastal freedom' },
        { folder: 'shirt2', num: '05', title: 'LONGHORN PIER', tagline: 'Texas pride meets ocean tide' },
        { folder: 'shirt3', num: '06', title: 'VINTAGE SKULL', tagline: 'Heritage. Grit. Timeless.' },
        { folder: 'shirt4', num: '07', title: 'WAVE + TEXAS', tagline: 'Clean lines. Bold roots.' }
    ];

    shirtDetails.forEach((s) => {
        slide = pptx.addSlide();
        slide.background = { color: CREAM };

        // Left accent bar
        slide.addShape(pptx.shapes.RECTANGLE, {
            x: 0, y: 0, w: 0.12, h: 5.63,
            fill: { color: ORANGE }
        });

        // Section number
        slide.addText(s.num, {
            x: 0.4, y: 0.2, w: 1.2, h: 0.7,
            fontSize: 36, bold: true, color: DARK_ORANGE
        });

        // Title
        slide.addText(s.title, {
            x: 0.4, y: 0.85, w: 5, h: 0.55,
            fontSize: 28, bold: true, color: BLACK
        });

        // Tagline
        slide.addText(s.tagline, {
            x: 0.4, y: 1.4, w: 5, h: 0.35,
            fontSize: 13, italic: true, color: ORANGE
        });

        // Two shirts - proper aspect ratio
        slide.addImage({
            path: path.join(brandDir, `tshirts/${s.folder}/front.png`),
            x: 0.6, y: 1.9, w: 3.5, h: 3.5
        });

        slide.addImage({
            path: path.join(brandDir, `tshirts/${s.folder}/back.png`),
            x: 4.8, y: 1.9, w: 3.5, h: 3.5
        });

        // Labels
        slide.addText('FRONT', { x: 0.6, y: 5.35, w: 3.5, h: 0.25, fontSize: 10, color: DARK_ORANGE, align: 'center' });
        slide.addText('BACK', { x: 4.8, y: 5.35, w: 3.5, h: 0.25, fontSize: 10, color: DARK_ORANGE, align: 'center' });
    });

    // ============ SLIDE 9: WHO WE SERVE ============
    slide = pptx.addSlide();
    slide.background = { color: CREAM };

    // Orange right side
    slide.addShape(pptx.shapes.RECTANGLE, {
        x: 5.8, y: 0, w: 4.2, h: 5.63,
        fill: { color: ORANGE }
    });

    // Section number
    slide.addText('08', {
        x: 0.3, y: 0.2, w: 1.2, h: 0.7,
        fontSize: 40, bold: true, color: DARK_ORANGE
    });

    slide.addText('WHO WE SERVE', {
        x: 0.5, y: 0.85, w: 4, h: 0.4,
        fontSize: 14, bold: true, color: ORANGE
    });

    // Image on orange
    slide.addImage({
        path: path.join(brandDir, 'tshirts/shirt2/back.png'),
        x: 6.2, y: 1, w: 3.4, h: 3.4
    });

    // Personas - minimal, editorial
    const personas = [
        { title: 'The Active Parent', text: 'Gym before the house wakes. Quality time over screen time.' },
        { title: 'The Coastal Texan', text: 'Beach roots. Texas pride. Authenticity over trends.' },
        { title: 'The Balanced Builder', text: 'Career and life. Burnout isn\'t a badge.' }
    ];

    personas.forEach((p, i) => {
        const y = 1.4 + (i * 1.25);

        // Accent line
        slide.addShape(pptx.shapes.RECTANGLE, {
            x: 0.5, y: y, w: 0.06, h: 0.9,
            fill: { color: ORANGE }
        });

        slide.addText(p.title, {
            x: 0.75, y: y, w: 4.8, h: 0.4,
            fontSize: 15, bold: true, color: BLACK
        });

        slide.addText(p.text, {
            x: 0.75, y: y + 0.4, w: 4.8, h: 0.5,
            fontSize: 12, color: DARK_ORANGE
        });
    });

    // ============ SLIDE 10: CLOSING ============
    slide = pptx.addSlide();
    slide.background = { color: ORANGE };

    // Large GRR
    slide.addText('GRR', {
        x: 0, y: 0.8, w: 10, h: 1.2,
        fontSize: 96, bold: true, color: CREAM, align: 'center'
    });

    // Tagline
    slide.addText('Gather. Rest. Rise.', {
        x: 0, y: 2.1, w: 10, h: 0.6,
        fontSize: 28, color: BLACK, align: 'center'
    });

    // Accent line
    slide.addShape(pptx.shapes.RECTANGLE, {
        x: 4, y: 2.9, w: 2, h: 0.04,
        fill: { color: CREAM }
    });

    // Value prop
    slide.addText('Premium lifestyle apparel for those who\nwork hard and live well.', {
        x: 0, y: 3.2, w: 10, h: 0.8,
        fontSize: 16, color: CREAM, align: 'center'
    });

    // CTA
    slide.addText("Let's build this together.", {
        x: 0, y: 4.4, w: 10, h: 0.5,
        fontSize: 20, bold: true, color: BLACK, align: 'center'
    });

    // ILM ATX
    slide.addText('ILM × ATX', {
        x: 0, y: 5, w: 10, h: 0.4,
        fontSize: 14, color: CREAM, align: 'center'
    });

    // Save as v5
    const outputPath = path.join(__dirname, 'GRR_Pitch_Deck_Enhanced.pptx');
    await pptx.writeFile({ fileName: outputPath });
    console.log(`\n✅ Enhanced pitch deck created: ${outputPath}`);
}

createEnhancedDeck().catch(console.error);
