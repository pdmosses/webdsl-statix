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
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl-statix-sig.stx/#signatures/WebDSL-Generated-sig_417_448" id="signatures/WebDSL-Generated-sig_7_38" title="Referenced at ../webdsl-statix-sig.stx line 15"><span class="token sort_Id">signatures/WebDSL-Generated-sig</span></a>

<span class="keyword">imports</span>
  <a href="../WebDSL-Core-sig.stx/#signatures/WebDSL-Core-sig_7_33" id="signatures/WebDSL-Core-sig_50_76" title="Defined at ../WebDSL-Core-sig.stx line 1"><span class="token sort_Id">signatures/WebDSL-Core-sig</span></a>
  <a href="../WebDSL-Lexical-sig.stx/#signatures/WebDSL-Lexical-sig_7_36" id="signatures/WebDSL-Lexical-sig_79_108" title="Defined at ../WebDSL-Lexical-sig.stx line 1"><span class="token sort_Id">signatures/WebDSL-Lexical-sig</span></a>

<span class="keyword">signature</span>

  <span class="keyword">sorts</span>
    <span class="cons_SortDecl"><a href="#GeneratedElement_195_211" id="GeneratedElement_133_149" title="Referenced at line 13, 18, 19, 20"><span class="token sort_Id">GeneratedElement</span></a></span>

  <span class="keyword">constructors</span>
    <span class="cons_OpDecl"><span id="GeneratedElement-Plhdr_170_192" title="Not referenced locally, nor via imports"><span class="token sort_Id">GeneratedElement-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#GeneratedElement_133_149" id="GeneratedElement_195_211" title="Defined at line 10"><span class="token sort_Id">GeneratedElement</span></a></span></span>

<span class="keyword">signature</span>

  <span class="keyword">constructors</span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/webdsl-search.stx/#Generated_3263_3272" id="Generated_243_252" title="Referenced at ../../../../trans/static-semantics/webdsl-search.stx line 86; ../../../../trans/static-semantics/entities/generated-functions.stx line 19, 45"><span class="token sort_Id">Generated</span></a> <span class="operator">:</span> <span class="keyword">list</span><span class="operator">(</span><span class="cons_SimpleSort"><a href="../WebDSL-Lexical-sig.stx/#Id_194_196" id="Id_260_262" title="Defined at ../WebDSL-Lexical-sig.stx line 14"><span class="token sort_Id">Id</span></a></span><span class="operator">)</span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#GeneratedElement_133_149" id="GeneratedElement_267_283" title="Defined at line 10"><span class="token sort_Id">GeneratedElement</span></a></span></span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/webdsl-search.stx/#GeneratedDefinition_3243_3262" id="GeneratedDefinition_288_307" title="Referenced at ../../../../trans/static-semantics/webdsl-search.stx line 86; ../../../../trans/static-semantics/entities/generated-functions.stx line 19, 45"><span class="token sort_Id">GeneratedDefinition</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#GeneratedElement_133_149" id="GeneratedElement_310_326" title="Defined at line 10"><span class="token sort_Id">GeneratedElement</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="../WebDSL-Core-sig.stx/#Definition_310_320" id="Definition_330_340" title="Defined at ../WebDSL-Core-sig.stx line 20"><span class="token sort_Id">Definition</span></a></span></span>
    <span class="cons_OpDecl"><span id="GeneratedEntityBodyDeclaration_345_375" title="Not referenced locally, nor via imports"><span class="token sort_Id">GeneratedEntityBodyDeclaration</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#GeneratedElement_133_149" id="GeneratedElement_378_394" title="Defined at line 10"><span class="token sort_Id">GeneratedElement</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="../WebDSL-DataModel-sig.stx/#EntityBodyDeclaration_164_185" id="EntityBodyDeclaration_398_419" title="Defined at ../WebDSL-DataModel-sig.stx line 11"><span class="token sort_Id">EntityBodyDeclaration</span></a></span></span>
</code></pre></td></tr></tbody></table></div>