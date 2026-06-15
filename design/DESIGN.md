---
name: Modern Heritage
colors:
  surface: '#fff8f3'
  surface-dim: '#e2d9ce'
  surface-bright: '#fff8f3'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fcf2e7'
  surface-container: '#f6ece1'
  surface-container-high: '#f1e7dc'
  surface-container-highest: '#ebe1d6'
  on-surface: '#1f1b14'
  on-surface-variant: '#4f4540'
  inverse-surface: '#353028'
  inverse-on-surface: '#f9efe4'
  outline: '#81756f'
  outline-variant: '#d3c3bd'
  surface-tint: '#705a4f'
  primary: '#25160e'
  on-primary: '#ffffff'
  primary-container: '#3c2a21'
  on-primary-container: '#aa9084'
  inverse-primary: '#dec1b3'
  secondary: '#725858'
  on-secondary: '#ffffff'
  secondary-container: '#fedada'
  on-secondary-container: '#785e5e'
  tertiary: '#2c1112'
  on-tertiary: '#ffffff'
  tertiary-container: '#442526'
  on-tertiary-container: '#b78a8a'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#fbdcce'
  primary-fixed-dim: '#dec1b3'
  on-primary-fixed: '#281810'
  on-primary-fixed-variant: '#574238'
  secondary-fixed: '#fedada'
  secondary-fixed-dim: '#e0bfbf'
  on-secondary-fixed: '#291617'
  on-secondary-fixed-variant: '#594141'
  tertiary-fixed: '#ffdad9'
  tertiary-fixed-dim: '#ecbbba'
  on-tertiary-fixed: '#2f1314'
  on-tertiary-fixed-variant: '#603d3e'
  background: '#fff8f3'
  on-background: '#1f1b14'
  surface-variant: '#ebe1d6'
typography:
  display-lg:
    fontFamily: newsreader
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
  headline-lg:
    fontFamily: newsreader
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: newsreader
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: workSans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: workSans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: workSans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1120px
  gutter: 24px
  margin: 32px
  stack-sm: 16px
  stack-md: 32px
  stack-lg: 64px
---

## Brand & Style

This design system establishes an editorial atmosphere that bridges the gap between a 19th-century Viennese coffee house and a high-end modern digital publication. The brand personality is authoritative yet inviting, celebrating the slow-pour ritual of coffee culture through a sophisticated visual language.

The style is a hybrid of **Minimalism** and **Tactile** design. It leverages generous whitespace and a clean grid to ensure modern usability while employing subtle textures and organic depth to evoke the physical sensation of a printed journal. The goal is to make the reader feel they are leaning into a physical space where history and craft intersect.

## Colors

The palette is rooted in the organic tones of the coffee production process. **Deep Espresso** serves as the primary anchor for text and structural elements, providing high contrast and a sense of permanence. **Warm Cream** acts as the canvas, replacing stark white to reduce eye strain and provide a "paper" feel.

**Rich Latte** and **Muted Gold** are used strategically for secondary actions, accents, and decorative flourishes. These tones should be applied to highlight metadata, pull-quotes, and interactive states, maintaining a low-vibrancy environment that feels calm and premium.

## Typography

The typographic hierarchy prioritizes a literary aesthetic. **Newsreader** is utilized for all headlines and editorial headers; its traditional serifs and variable widths convey a sense of heritage and journalistic integrity.

For the core reading experience, **Work Sans** provides a grounded, neutral counterpoint. Its clean, geometric forms ensure high legibility in long-form articles. Large body text and generous line heights are essential to maintain the "slow-read" philosophy of the design system. All labels and metadata should be set in Work Sans with increased letter spacing and uppercase styling to denote a modern, curated touch.

## Layout & Spacing

The design system employs a **Fixed Grid** model to mimic the structured layout of a broadsheet or magazine. A 12-column grid is centered within the viewport, with wide outer margins that frame the content, emphasizing the premium nature of the articles.

Spacing follows an 8px rhythmic scale. Vertical rhythm is strictly enforced to ensure that the relationship between headings and body text feels intentional. Large "stack-lg" gaps are used between major sections to allow the design to breathe, preventing the visual clutter common in news-heavy websites.

## Elevation & Depth

Hierarchy is established through **Tonal Layers** and **Ambient Shadows**. Instead of harsh drop shadows, this design system utilizes soft, diffused shadows tinted with Deep Espresso to create a "lifted paper" effect.

A critical aesthetic component is the **Texture Overlay**. A subtle, low-opacity paper grain should be applied to the primary background (Warm Cream) and card surfaces. This texture breaks the digital perfection of the screen, adding a tactile quality. Use low-contrast borders (1px solid #D5B4B4) to define sections without breaking the flow of the page.

## Shapes

The shape language is characterized by **earthy, rounded corners**. This avoids the clinical feel of sharp 90-degree angles while remaining more structured than a fully circular "pill" aesthetic. 

Standard components like cards and input fields use a base radius of 8px (0.5rem), while larger containers like featured article headers may scale up to 1.5rem. This softness reflects the organic nature of coffee beans and the fluidity of steaming milk.

## Components

### Buttons
Primary buttons feature a solid Deep Espresso background with Warm Cream text. Secondary buttons utilize a Muted Gold border with centered serif text. All buttons should have a subtle hover state that deepens the shadow rather than drastically changing the color.

### Cards
Article cards are the primary vessel for content. They use a slightly lighter shade of the neutral palette or a subtle 1px border. The top of the card should feature imagery with a slight grain filter, followed by a Newsreader headline.

### Input Fields
Forms should be minimalist, featuring only a bottom border or a very light rounded enclosure. Focus states are indicated by a Muted Gold border-bottom, avoiding heavy glows.

### Lists & Dividers
Lists should be separated by thin, elegant horizontal rules in Rich Latte. Dividers can occasionally feature a small "Bean" glyph or a centered Muted Gold dot to signify the end of a section.

### Brew Metrics (Custom Component)
A specific component for coffee blogs: a small data grid using Label-sm typography to display "Roast Level," "Origin," and "Brew Method," styled with a subtle background tint of Rich Latte to set it apart from the article body.