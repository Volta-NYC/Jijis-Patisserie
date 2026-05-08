# Jiji's Patisserie Static Website

This is a static, no-build website for Jiji's Patisserie, a small batch Japanese-style salt bread pop-up in Brooklyn, NY. It is designed for deployment on Vercel as plain HTML and CSS.

## Deploying on Vercel

1. Push this folder to a Git repository.
2. Create a new Vercel project from that repository.
3. Use the default static site settings.
4. Leave the build command empty.
5. Set the output directory to the project root if Vercel asks for one.

All asset paths are relative, so the site can also be opened locally by loading `index.html` in a browser.

## File Map

- `index.html` - Semantic single-page website content.
- `styles.css` - Mobile-first responsive styling and local font declarations.
- `assets/fonts/` - Locally served Playfair Display and Lora font files.
- `files/info.md` - Source scrape report used to build the page.

## Image Inventory

No production image assets are currently included. The site intentionally uses brand-color blocks and a logo placeholder instead of stock photography.

Needed from the owner:

- Logo file, preferably SVG or transparent PNG. Description: black cat peeking over or holding golden-brown salt bread, inside a magenta circle, with the "jiji's patisserie" wordmark.
- Hero product photo of salt bread.
- Product photos for Original Salt Bread, Honey Butter Salt Bread, Black Truffle Salt Bread, Shanghai Butter Mochi, and the Simple Salt Bread Flight.
- Action photo of Manni baking or packaging.
- Pop-up setup photo showing the table/menu/signage.

Temporary remote asset noted in the scrape report:

- Hotplate header image: `https://2g5xmdu6hp.ucarecd.net/4912a653-e128-4484-ab16-6d67256cb986/-/crop/1086x466/137,620/-/preview/`
- This site does not reference it in production HTML. If used later, download it and serve it locally.

## Missing Information for the Owner

- Logo file, PNG or SVG.
- Product photos for salt bread, mochi, flight, and pop-up setup.
- Whether the site should keep a permanent "next event" section or only point to Instagram.
- Confirmed contact method, if anything beyond Instagram DM should be listed.
- Any additional menu items, descriptions, allergens, or pickup notes.
- Whether the Kiki's Delivery Service / Jiji black cat reference is intentional before using that story in public copy.

## Fonts

- Playfair Display is used for headings, item names, and display text.
- Lora is used for body copy.
- Both fonts were downloaded from the Google Fonts GitHub repository and are served locally from `assets/fonts/`.
