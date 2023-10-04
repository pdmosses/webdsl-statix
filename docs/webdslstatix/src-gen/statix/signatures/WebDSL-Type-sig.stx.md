---
title: WebDSL-Type-sig.stx
hide:
  - toc
---

# `WebDSL-Type-sig.stx`



[pdmosses/webdsl-statix/webdslstatix/src-gen/statix/signatures/WebDSL-Type-sig.stx]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/src-gen/statix/signatures/WebDSL-Type-sig.stx "The source file on GitHub"

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
21
22
23
24
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl-statix-sig.stx#signatures/WebDSL-Type-sig_773_799" id="signatures/WebDSL-Type-sig_7_33" title="Referenced at ../webdsl-statix-sig.stx line 26">signatures/WebDSL-Type-sig</a>

<span class="keyword">imports</span>
  <a href="../WebDSL-Action-sig.stx#signatures/WebDSL-Action-sig_7_35" id="signatures/WebDSL-Action-sig_45_73" title="Defined at ../WebDSL-Action-sig.stx line 1">signatures/WebDSL-Action-sig</a>
  <a href="../WebDSL-DataModel-sig.stx#signatures/WebDSL-DataModel-sig_7_38" id="signatures/WebDSL-DataModel-sig_76_107" title="Defined at ../WebDSL-DataModel-sig.stx line 1">signatures/WebDSL-DataModel-sig</a>
  <a href="../WebDSL-Lexical-sig.stx#signatures/WebDSL-Lexical-sig_7_36" id="signatures/WebDSL-Lexical-sig_110_139" title="Defined at ../WebDSL-Lexical-sig.stx line 1">signatures/WebDSL-Lexical-sig</a>
  <a href="../WebDSL-Native-sig.stx#signatures/WebDSL-Native-sig_7_35" id="signatures/WebDSL-Native-sig_142_170" title="Defined at ../WebDSL-Native-sig.stx line 1">signatures/WebDSL-Native-sig</a>
  <a href="../WebDSL-Core-sig.stx#signatures/WebDSL-Core-sig_7_33" id="signatures/WebDSL-Core-sig_173_199" title="Defined at ../WebDSL-Core-sig.stx line 1">signatures/WebDSL-Core-sig</a>

<span class="keyword">signature</span>

  <span class="keyword">sorts</span>
    <a href="#TypeElement_276_287" id="TypeElement_224_235" title="Referenced at line 16, 21, 22, 23, 24; ../../../../trans/static-semantics/types/type-extensions.stx line 23">TypeElement</a>

  <span class="keyword">constructors</span>
    <span id="TypeElement-Plhdr_256_273" title="Not referenced locally, nor via imports">TypeElement-Plhdr</span> : <a href="#TypeElement_224_235" id="TypeElement_276_287" title="Defined at line 13">TypeElement</a>

<span class="keyword">signature</span>

  <span class="keyword">constructors</span>
    <a href="../../../../trans/static-semantics/types/type-extensions.stx#TypeDef_274_281" id="TypeDef_319_326" title="Referenced at ../../../../trans/static-semantics/types/type-extensions.stx line 15">TypeDef</a> : <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_329_331" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> * <span class="keyword">list</span>(<a href="#TypeElement_224_235" id="TypeElement_339_350" title="Defined at line 13">TypeElement</a>) -&gt; <a href="../WebDSL-Core-sig.stx#Definition_310_320" id="Definition_355_365" title="Defined at ../WebDSL-Core-sig.stx line 20">Definition</a>
    <span id="TypeAnno_370_378" title="Not referenced locally, nor via imports">TypeAnno</span> : <a href="../WebDSL-DataModel-sig.stx#Annotation_220_230" id="Annotation_381_391" title="Defined at ../WebDSL-DataModel-sig.stx line 14">Annotation</a> -&gt; <a href="#TypeElement_224_235" id="TypeElement_395_406" title="Defined at line 13">TypeElement</a>
    <a href="../../../../trans/static-semantics/types/type-extensions.stx#TypeFunction_756_768" id="TypeFunction_411_423" title="Referenced at ../../../../trans/static-semantics/types/type-extensions.stx line 24">TypeFunction</a> : <a href="../WebDSL-Native-sig.stx#NCFunction_183_193" id="NCFunction_426_436" title="Defined at ../WebDSL-Native-sig.stx line 14">NCFunction</a> -&gt; <a href="#TypeElement_224_235" id="TypeElement_440_451" title="Defined at line 13">TypeElement</a>
    <a href="../../../../trans/static-semantics/types/type-extensions.stx#TypeFunctionFromStatic_859_881" id="TypeFunctionFromStatic_456_478" title="Referenced at ../../../../trans/static-semantics/types/type-extensions.stx line 27">TypeFunctionFromStatic</a> : <a href="../WebDSL-Native-sig.stx#NCFunctionFromStatic_240_260" id="NCFunctionFromStatic_481_501" title="Defined at ../WebDSL-Native-sig.stx line 17">NCFunctionFromStatic</a> -&gt; <a href="#TypeElement_224_235" id="TypeElement_505_516" title="Defined at line 13">TypeElement</a>
</code></pre></td></tr></tbody></table></div>