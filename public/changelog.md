## 1.0.0-beta.5 ( Major Release )
> 25th June, 2024
## ✨ Web Search, Image Upload & Linux Support is here!
- Experimental web search is here, you can submit a link as well as perform a duckduckgo search.
- Linux support is here, although the logo of llocal is not visible but the functionalities work just as on the other platforms.
- The auto-install of Ollama works only on debian distros. (Atleast only tested on debian systems)
- Image Upload is now available to be utilized by supported vision models [(More Information Here)](https://ollama.com/library)
## 🌊 What's Changed
- Copy code block is now available with Syntax Highlight for almost every language out there (with the atom theme haha)!
- Tabular format support is here.
- Stop Generating button is here, although the position is debatable.
- Fixed changing chats while streaming, now you can only switch between chats when the text is not streaming.
- More button (+) in the input for text, which allows to toggle on and off web search aswell as supports images.

## ❄️ Web Search (More information)
- Web search toggle, has two inbuilt modes a webscraper mode aswell as a duckduckgo search.
- **Web scraper** : You can simply paste a link in the prompt along with your query and llocal will handle the rest. (Eg. What are the 3 endings in Sekiro?  https://en.wikipedia.org/wiki/Sekiro:_Shadows_Die_Twice )
- **Web search** : This performs a web search, based on a prompt. It returns the top 10 results and a very small summary of each result from the duckduckgo api.

##  ⚡ New Contributors
* @FruitPnchSamuraiG made their first contribution in https://github.com/kartikm7/llocal/pull/3

**Full Changelog**: https://github.com/kartikm7/llocal/compare/v1.0.0-beta.4...v1.0.0-beta.5

## 1.0.0-beta.4 ( Major Release )
> 20th June, 2024
### Official Mac Support
- Mac support is here. This has been one of the major goals for the project.
- Ollama, can be downloaded and prompted to be installed if detected as not installed.

### What's Changed
* refactor: improve error handling in checkOllama function by @virajbhartiya in https://github.com/kartikm7/llocal/pull/1
* fix : partial mac setup by @dandonarahul2002 in https://github.com/kartikm7/llocal/pull/2

### New Contributors
* @virajbhartiya made their first contribution in https://github.com/kartikm7/llocal/pull/1
* @dandonarahul2002 made their first contribution in https://github.com/kartikm7/llocal/pull/2

**Full Changelog**: https://github.com/kartikm7/llocal/compare/v1.0.0-beta.2...v1.0.0-beta.4

## 1.0.0-beta.3
> 27th June, 2024
### Note
- This version was not documented (I was still figuring it out)

## 1.0.0-beta.2
> Pre-release
### Functional Features
- Auto-updater

## 1.0.0-beta.1
> Pre-release
### Functional Features
- Ollama auto-downloader
- Ollama auto-installer

### User experience features
- New logo (I think it might just count as a feature)

## 1.0.0-beta
> Pre-release
### Functional Features
- Ollama support (both, pulling models and chatting)
- Local data storage (no cloud connectivity)
- Chat streaming 
- Support to switch between models

### UX Features:
- Theming options ( across 5 themes)
- Dark mode and light mode support

> Note: It is still in a pre-release phase, so all features might not work as intended.