# Hyperlinked Twin

This website is a _[hyperlinked twin][hyperlinked twins]_ of a [Spoofax] language project code repository.
The website navigation hierarchy corresponds to the repository file hierarchy,
and the code displayed on each page is a verbatim copy of the raw code in the corresponding file.

Hyperlinked twins support _precise name-based code navigation_ online in ordinary web browsers:

- Simply click on a name reference to jump to the first declaration of the name.
- Click on a declaration to display a modal with links to all the references to the declaration.[^1]

[^1]: When there is only one reference to a declaration,
​    clicking on the declaration jumps directly to the reference.
​    When there are no references to a declaration,
​    clicking on it has no effect.

The sources of the webpages were generated using Spoofax from the analysed language project.
The hyperlinks added to names were generated from the name binding analysis used by Spoofax,
and the syntax highlighting corresponds closely to that displayed when browsing files in Spoofax.

The aim is for a future release of Spoofax to support generation of hyperlinked twin websites
with code in all [Spoofax meta-languages].

[hyperlinked twins]: https://pdmosses.github.io/hyperlinked-twins/
[Spoofax]: https://spoofax.dev
[Spoofax meta-languages]: https://spoofax.dev/references/#spoofax-meta-languages
[SDF repo]: https://github.com/metaborg/sdf
[Material for MkDocs]: https://squidfunk.github.io/mkdocs-material
[mkdocs-awesome-pages-plugin]: https://github.com/lukasgeiter/mkdocs-awesome-pages-plugin