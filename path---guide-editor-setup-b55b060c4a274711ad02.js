webpackJsonp([44],{"./node_modules/json-loader/index.js!./.cache/json/guide-editor-setup.json":function(e,t){e.exports={data:{allFile:{edges:[{node:{relativePath:"guide/editor-setup.md",childMarkdownRemark:{frontmatter:{title:"Editor Setup",order:1}}}},{node:{relativePath:"guide/index.md",childMarkdownRemark:{frontmatter:{title:"The Reason Guide",order:0}}}},{node:{relativePath:"guide/examples.md",childMarkdownRemark:{frontmatter:{title:"Examples",order:20}}}},{node:{relativePath:"guide/ocaml.md",childMarkdownRemark:{frontmatter:{title:"Comparison to OCaml",order:10}}}},{node:{relativePath:"guide/tools.md",childMarkdownRemark:{frontmatter:{title:"Tools",order:4}}}},{node:{relativePath:"guide/javascript/index.md",childMarkdownRemark:{frontmatter:{title:"JavaScript",order:4}}}},{node:{relativePath:"guide/javascript/libraries.md",childMarkdownRemark:{frontmatter:{title:"Libraries",order:2}}}},{node:{relativePath:"guide/javascript/interop.md",childMarkdownRemark:{frontmatter:{title:"Interop",order:1}}}},{node:{relativePath:"guide/javascript/converting.md",childMarkdownRemark:{frontmatter:{title:"Converting from JS",order:5}}}},{node:{relativePath:"guide/language/array.md",childMarkdownRemark:{frontmatter:{title:"Array",order:90}}}},{node:{relativePath:"guide/language/boolean.md",childMarkdownRemark:{frontmatter:{title:"Boolean",order:30}}}},{node:{relativePath:"guide/language/conditionals.md",childMarkdownRemark:{frontmatter:{title:"Conditionals",order:110}}}},{node:{relativePath:"guide/javascript/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Quickstart",order:0}}}},{node:{relativePath:"guide/language/destructuring.md",childMarkdownRemark:{frontmatter:{title:"Destructuring & Pattern Matching",order:130}}}},{node:{relativePath:"guide/javascript/syntax-cheetsheet.md",childMarkdownRemark:{frontmatter:{title:"Syntax cheetsheet",order:1}}}},{node:{relativePath:"guide/language/index.md",childMarkdownRemark:{frontmatter:{title:"Language basics",order:1}}}},{node:{relativePath:"guide/language/integer-and-float.md",childMarkdownRemark:{frontmatter:{title:"Integer & Float",order:40}}}},{node:{relativePath:"guide/language/functions.md",childMarkdownRemark:{frontmatter:{title:"Functions",order:100}}}},{node:{relativePath:"guide/language/externals.md",childMarkdownRemark:{frontmatter:{title:"Externals",order:170}}}},{node:{relativePath:"guide/language/imperative-loops.md",childMarkdownRemark:{frontmatter:{title:"Imperative Loops",order:150}}}},{node:{relativePath:"guide/language/jsx.md",childMarkdownRemark:{frontmatter:{title:"JSX",order:160}}}},{node:{relativePath:"guide/language/list.md",childMarkdownRemark:{frontmatter:{title:"List",order:80}}}},{node:{relativePath:"guide/language/let-bindings.md",childMarkdownRemark:{frontmatter:{title:"Let Bindings",order:10}}}},{node:{relativePath:"guide/language/modules.md",childMarkdownRemark:{frontmatter:{title:"Modules",order:180}}}},{node:{relativePath:"guide/language/string-and-char.md",childMarkdownRemark:{frontmatter:{title:"String & Char",order:20}}}},{node:{relativePath:"guide/language/overview.md",childMarkdownRemark:{frontmatter:{title:"Overview",order:0}}}},{node:{relativePath:"guide/language/tuple.md",childMarkdownRemark:{frontmatter:{title:"Tuple",order:50}}}},{node:{relativePath:"guide/language/types.md",childMarkdownRemark:{frontmatter:{title:"Types!",order:120}}}},{node:{relativePath:"guide/language/variant.md",childMarkdownRemark:{frontmatter:{title:"Variant",order:70}}}},{node:{relativePath:"guide/language/record.md",childMarkdownRemark:{frontmatter:{title:"Record",order:60}}}},{node:{relativePath:"guide/language/mutation.md",childMarkdownRemark:{frontmatter:{title:"Mutation",order:140}}}},{node:{relativePath:"guide/native/index.md",childMarkdownRemark:{frontmatter:{title:"Native",order:5}}}},{node:{relativePath:"guide/native/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Quickstart",order:0}}}},{node:{relativePath:"guide/native/convert-from-ocaml.md",childMarkdownRemark:{frontmatter:{title:"Converting from OCaml",order:4}}}}]},file:{relativePath:"guide/editor-setup.md",childMarkdownRemark:{html:'<p>See our <a href="/guide/tools">tooling</a> section for a descriptions of what you need to install and which editors we support.\nOur <a href="/guide/tools#editor-integration">editor integration</a> need a few binaries to be found in your <code>$PATH</code>:</p>\n<ul>\n<li><code>refmt</code>: the Reason parser/printer (editor formatter).</li>\n<li><code>ocamlmerlin-reason</code>: Reason bridge to <a href="/guide/tools#tools-command-line-utilities-merlin">Merlin</a>.</li>\n<li><code>ocamlmerlin</code>: the Merlin binary.\nThe tooling section explains what these binaries do.</li>\n</ul>\n<p><strong>Install reason-cli globally</strong> with npm/yarn:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-sh"><code><span class="hljs-comment">## on Linux:</span>\nnpm install -g https://github.com/reasonml/reason-cli/archive/beta-v-<span class="hljs-number">1.13</span>.<span class="hljs-number">6</span>-bin-linux.tar.gz\n<span class="hljs-comment">## on MacOS:</span>\nnpm install -g https://github.com/reasonml/reason-cli/archive/beta-v-<span class="hljs-number">1.13</span>.<span class="hljs-number">6</span>-bin-darwin.tar.gz\n<span class="hljs-comment">## test that you have them installed correctly</span>\n<span class="hljs-built_in">which</span> ocamlmerlin refmt ocamlmerlin-reason</code></pre>\n      </div>\n<p><strong>Note</strong>: <code>reason-cli</code> currently doesn\'t work on Windows, but it\'s not a hard requirement for using Reason; you can still have great CLI build system messages through BuckleScript, whose npm package <a href="https://www.npmjs.com/package/bs-platform"><code>bs-platform</code></a> does work on Windows.</p>\n<p><strong>Note</strong>: please verify that your installed OCaml version is <code>4.02.x</code> and that Merlin is <code>>=2.5.1</code>. The above installation does that automatically, but people sometimes install our toolchain through other ways (e.g. OPAM, with looser version constraints).</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-sh"><code>ocamlc -version\nocamlmerlin -version</code></pre>\n      </div>',frontmatter:{title:"Editor Setup"}}}},pathContext:{section:"guide",sectionTitle:"Guide",relativePath:"guide/editor-setup.md",relatedFiles:"/^guide\\/.*\\.md$/"}}}});
//# sourceMappingURL=path---guide-editor-setup-b55b060c4a274711ad02.js.map