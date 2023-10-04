# Home

This website is a _hyperlinked twin_ of (part of) a [Spoofax] language project repo.

It supports online navigation in the language project
by enhancing the raw code from the repo with syntax-based highlighting,
and with hyperlinks between declarations of and references to names.

Both the highlighting and the hyperlinks are generated from the metadata used by Spoofax.

Spoofax is used to generate the sources of the webpages from raw files in Spoofax metalanguagea:

- `docs/PROJECT/DIR/FILE.META-LANG.md` is generated from `metaborg/REPO/PROJECT/DIR/FILE.META-LANG`
- `docs/PROJECT/DIR/.pages` is generated from `metaborg/REPO/PROJECT/DIR/`

!!! warning

    The implementation and the generated website have not yet been reviewed by the Spoofax developers.

The aim is for a future release of Spoofax to support generation of hyperlinked twins
from code in all the [Spoofax meta-languages].

The [Material for MkDocs] theme builds this website from the generated Markdown files.

!!! note

    Currently, the generated CSS used for the syntax highlighting does not support a dark mode.


The [mkdocs-awesome-pages-plugin]
generates the directory titles in the navigation from the settings in the `.pages` files,
overriding the built-in title transformation made by MkDocs.[^mkdocs-issue]

[^mkdocs-issue]: See <https://github.com/mkdocs/mkdocs/issues/2086>.

[Spoofax]: https://spoofax.dev
[Spoofax meta-languages]: https://spoofax.dev/references/#spoofax-meta-languages
[Material for MkDocs]: https://squidfunk.github.io/mkdocs-material
[mkdocs-awesome-pages-plugin]: https://github.com/lukasgeiter/mkdocs-awesome-pages-plugin
