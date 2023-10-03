---
title: WebDSL-Generated-sig.stx
hide:
  - toc
---

# `WebDSL-Generated-sig.stx`



[pdmosses/webdsl-statix/webdslstatix/src-gen/statix/signatures/WebDSL-Generated-sig.stx]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/src-gen/statix/signatures/WebDSL-Generated-sig.stx "The source file on GitHub"

<div class="stx"><table class="highlighttable"><tbody><tr><td class="linenos"><div class="linenodiv"><pre><span></span>1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl-statix-sig.stx#signatures/WebDSL-Generated-sig_417_448" id="signatures/WebDSL-Generated-sig_7_38" title="Referenced at ../webdsl-statix-sig.stx line 15">signatures/WebDSL-Generated-sig</a>

<span class="keyword">imports</span>
  <a href="../WebDSL-Core-sig.stx#signatures/WebDSL-Core-sig_7_33" id="signatures/WebDSL-Core-sig_50_76" title="Defined at ../WebDSL-Core-sig.stx line 1">signatures/WebDSL-Core-sig</a>
  <a href="../WebDSL-Lexical-sig.stx#signatures/WebDSL-Lexical-sig_7_36" id="signatures/WebDSL-Lexical-sig_79_108" title="Defined at ../WebDSL-Lexical-sig.stx line 1">signatures/WebDSL-Lexical-sig</a>

<span class="keyword">signature</span>

  <span class="keyword">sorts</span>
    <a href="#GeneratedElement_195_211" id="GeneratedElement_133_149" title="Referenced at line 13, 18, 19, 20">GeneratedElement</a>

  <span class="keyword">constructors</span>
    <span id="GeneratedElement-Plhdr_170_192" title="Not referenced locally, nor via imports">GeneratedElement-Plhdr</span> : <a href="#GeneratedElement_133_149" id="GeneratedElement_195_211" title="Defined at line 10">GeneratedElement</a>

<span class="keyword">signature</span>

  <span class="keyword">constructors</span>
    <a href="../../../../trans/static-semantics/webdsl-search.stx#Generated_3263_3272" id="Generated_243_252" title="Referenced at ../../../../trans/static-semantics/webdsl-search.stx line 86; ../../../../trans/static-semantics/entities/generated-functions.stx line 19, 45">Generated</a> : <span class="keyword">list</span>(<a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_260_262" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a>) -&gt; <a href="#GeneratedElement_133_149" id="GeneratedElement_267_283" title="Defined at line 10">GeneratedElement</a>
    <a href="../../../../trans/static-semantics/webdsl-search.stx#GeneratedDefinition_3243_3262" id="GeneratedDefinition_288_307" title="Referenced at ../../../../trans/static-semantics/webdsl-search.stx line 86; ../../../../trans/static-semantics/entities/generated-functions.stx line 19, 45">GeneratedDefinition</a> : <a href="#GeneratedElement_133_149" id="GeneratedElement_310_326" title="Defined at line 10">GeneratedElement</a> -&gt; <a href="../WebDSL-Core-sig.stx#Definition_310_320" id="Definition_330_340" title="Defined at ../WebDSL-Core-sig.stx line 20">Definition</a>
    <span id="GeneratedEntityBodyDeclaration_345_375" title="Not referenced locally, nor via imports">GeneratedEntityBodyDeclaration</span> : <a href="#GeneratedElement_133_149" id="GeneratedElement_378_394" title="Defined at line 10">GeneratedElement</a> -&gt; <a href="../WebDSL-DataModel-sig.stx#EntityBodyDeclaration_164_185" id="EntityBodyDeclaration_398_419" title="Defined at ../WebDSL-DataModel-sig.stx line 11">EntityBodyDeclaration</a>
</code></pre></td></tr></tbody></table></div>