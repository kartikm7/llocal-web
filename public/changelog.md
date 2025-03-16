## Minor Release
> 17th March, 2025
## ✨ LLocal now supports the **<think></think>** block!
- Added support for the **think** block, for both while streaming and when added to db.
- Model pulls/downloads are now cancellable.

## 🌊 What's Changed
- Optimized re-renders, by isolating components.
- Model's can be directly pulled from the breadcrumbs in settings.

**Full Changelog**: https://github.com/kartikm7/llocal/compare/v1.0.0-beta.8...v1.0.0-beta.9

## 1.0.0-beta.8 ( Major Release )
> 27th January, 2025
## ✨ LLocal Artifacts and Transparency Mode!
- LLocal Artifacts are runnable aspects within the LLocal environment.
- LLocal now supports the mermaid code live preview right in the chat, this is the first LLocal artifact.
- Transparency mode is now also available. (Does not work as expected for Linux yet and even windows does have some edge cases, so it is a little unstable at the moment)

## 🌊 What's Changed
- Transparency mode provides a blurred backdrop effect to LLocal and also on windows LLocal now has a custom title-bar.
- Transparency mode can be activated from the settings through the checkbox and for it to be actually visible the background has to be set to `None`.
-  Fixed issue #14 .
- Mermaid code preview is supported for Mermaid `11.4.1` syntax.

**Full Changelog**: https://github.com/kartikm7/llocal/compare/v1.0.0-beta.7...v1.0.0-beta.8

## 1.0.0-beta.7 ( Major Release )
> 28th November, 2024
## ✨ Multiple File Support and Prompt Suggestions are here!
- LLocal can now perform semantic search across multiple PDF's which are reranked using the BM25.
- After every AI response now there are AI generated prompt suggestions!

## 🌊 What's Changed
- Fixed the overflow during code generation. (This time for good) #4 
- Changed the location for the stop generating button. It gets swapped with the send button.
- Tooltip over the knowledge base context.
- An attempt to solve the issue #12 . (By enabling rebuild of native modules in the build script) 

## Major Thanks to the Contributors!
* Multi-pdf Capabilities by @dandonarahul2002 in https://github.com/kartikm7/llocal/pull/13


**Full Changelog**: https://github.com/kartikm7/llocal/compare/v1.0.0-beta.6...v1.0.0-beta.7

## 1.0.0-beta.6 ( Major Release )
> 5th September, 2024
## ✨ Knowledge Base is here with File Upload Support!
- With the power of VectorDB's, LLocal now utilizes a persistent way to store vector embeddings. (Although only applicable to File Uploads at the moment).
- pdf, docx, pptx, csv and txt files are supported for file upload.

## 🌊 What's Changed
- Delete chat is now here. #5 
- Fixed the overflow during code generation. #4 
- The more button (+) near the text input, has an added file upload section.
- Settings has been revamped now with two sections, Settings (General) and Knowledge Base.
- You can delete the saved VectorDB's through the knowledge base section in settings.
- There's also an auto-complete pop-up for easy navigation through existing VectorDB's by using a / forward slash at the beginning of your prompt.

## ❄️ Knowledge Base (More information)
- The knowledge base uses a basic similarity search at the moment, which retrieves relevant chunks quickly unlike agentic solutions. Although the results are still not up-to the mark.
- Further, on every RAG based prompt the response also has a sources table attached to show where the retrieved chunks are in the actual file.

**Full Changelog**: https://github.com/kartikm7/llocal/compare/v1.0.0-beta.5...v1.0.0-beta.6

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
