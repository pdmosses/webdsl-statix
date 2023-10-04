---
title: WebDSL-XML-sig.stx
hide:
  - toc
---

# `WebDSL-XML-sig.stx`



[pdmosses/webdsl-statix/webdslstatix/src-gen/statix/signatures/WebDSL-XML-sig.stx]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/src-gen/statix/signatures/WebDSL-XML-sig.stx "The source file on GitHub"

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
25
26
27
28
29
30
31
32
33
34
35
36
37
38
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <a href="../WebDSL-JavaScript-sig.stx#signatures/WebDSL-XML-sig_144_169" id="signatures/WebDSL-XML-sig_7_32" title="Referenced at ../WebDSL-JavaScript-sig.stx line 7; ../webdsl-statix-sig.stx line 28; ../WebDSL-UI-sig.stx line 8">signatures/WebDSL-XML-sig</a>

<span class="keyword">imports</span>
  <a href="../WebDSL-Action-sig.stx#signatures/WebDSL-Action-sig_7_35" id="signatures/WebDSL-Action-sig_44_72" title="Defined at ../WebDSL-Action-sig.stx line 1">signatures/WebDSL-Action-sig</a>
  <a href="../WebDSL-UI-sig.stx#signatures/WebDSL-UI-sig_7_31" id="signatures/WebDSL-UI-sig_75_99" title="Defined at ../WebDSL-UI-sig.stx line 1">signatures/WebDSL-UI-sig</a>
  <a href="../WebDSL-Attributes-sig.stx#signatures/WebDSL-Attributes-sig_7_39" id="signatures/WebDSL-Attributes-sig_102_134" title="Defined at ../WebDSL-Attributes-sig.stx line 1">signatures/WebDSL-Attributes-sig</a>

<span class="keyword">signature</span>

  <span class="keyword">sorts</span>
    <a href="#HTML5VoidElement_679_695" id="HTML5VoidElement_159_175" title="Referenced at line 30">HTML5VoidElement</a> = <span class="keyword">string</span>
    <a href="#XMLComment_750_760" id="XMLComment_189_199" title="Referenced at line 31">XMLComment</a> = <span class="keyword">string</span>
    <span id="XMLCommentChar_213_227" title="Not referenced locally, nor via imports">XMLCommentChar</span> = <span class="keyword">string</span>
    <span id="OneDash_241_248" title="Not referenced locally, nor via imports">OneDash</span> = <span class="keyword">string</span>
    <span id="TwoDashes_262_271" title="Not referenced locally, nor via imports">TwoDashes</span> = <span class="keyword">string</span>
    <a href="#QualName_932_940" id="QualName_285_293" title="Referenced at line 34">QualName</a> = <span class="keyword">string</span>
    <span id="Qualifier_307_316" title="Not referenced locally, nor via imports">Qualifier</span> = <span class="keyword">string</span>
    <span id="NCName_330_336" title="Not referenced locally, nor via imports">NCName</span> = <span class="keyword">string</span>
    <a href="#XMLTagName_499_509" id="XMLTagName_350_360" title="Referenced at line 28, 29, 29">XMLTagName</a> = <span class="keyword">string</span>
    <a href="#CommonAttribute_434_449" id="CommonAttribute_374_389" title="Referenced at line 23, 35, 36, 37, 38; ../WebDSL-UI-sig.stx line 222; ../../../../trans/static-semantics/ui/attributes.stx line 46">CommonAttribute</a>

  <span class="keyword">constructors</span>
    <span id="CommonAttribute-Plhdr_410_431" title="Not referenced locally, nor via imports">CommonAttribute-Plhdr</span> : <a href="#CommonAttribute_374_389" id="CommonAttribute_434_449" title="Defined at line 20">CommonAttribute</a>

<span class="keyword">signature</span>

  <span class="keyword">constructors</span>
    <a href="../../../../trans/static-semantics/webdsl-ui.stx#XMLEmptyElement_7842_7857" id="XMLEmptyElement_481_496" title="Referenced at ../../../../trans/static-semantics/webdsl-ui.stx line 154">XMLEmptyElement</a> : <a href="#XMLTagName_350_360" id="XMLTagName_499_509" title="Defined at line 19">XMLTagName</a> * <span class="keyword">list</span>(<a href="../WebDSL-Attributes-sig.stx#Attribute_292_301" id="Attribute_517_526" title="Defined at ../WebDSL-Attributes-sig.stx line 16">Attribute</a>) -&gt; <a href="../WebDSL-UI-sig.stx#TemplateElement_256_271" id="TemplateElement_531_546" title="Defined at ../WebDSL-UI-sig.stx line 15">TemplateElement</a>
    <a href="../../../../trans/static-semantics/webdsl-ui.stx#XMLElement_8050_8060" id="XMLElement_551_561" title="Referenced at ../../../../trans/static-semantics/webdsl-ui.stx line 160">XMLElement</a> : <a href="#XMLTagName_350_360" id="XMLTagName_564_574" title="Defined at line 19">XMLTagName</a> * <span class="keyword">list</span>(<a href="../WebDSL-Attributes-sig.stx#Attribute_292_301" id="Attribute_582_591" title="Defined at ../WebDSL-Attributes-sig.stx line 16">Attribute</a>) * <span class="keyword">list</span>(<a href="../WebDSL-UI-sig.stx#TemplateElement_256_271" id="TemplateElement_600_615" title="Defined at ../WebDSL-UI-sig.stx line 15">TemplateElement</a>) * <a href="#XMLTagName_350_360" id="XMLTagName_619_629" title="Defined at line 19">XMLTagName</a> -&gt; <a href="../WebDSL-UI-sig.stx#TemplateElement_256_271" id="TemplateElement_633_648" title="Defined at ../WebDSL-UI-sig.stx line 15">TemplateElement</a>
    <a href="../../../../trans/static-semantics/webdsl-ui.stx#XMLEmptyElementUnclosed_7940_7963" id="XMLEmptyElementUnclosed_653_676" title="Referenced at ../../../../trans/static-semantics/webdsl-ui.stx line 157">XMLEmptyElementUnclosed</a> : <a href="#HTML5VoidElement_159_175" id="HTML5VoidElement_679_695" title="Defined at line 11">HTML5VoidElement</a> * <span class="keyword">list</span>(<a href="../WebDSL-Attributes-sig.stx#Attribute_292_301" id="Attribute_703_712" title="Defined at ../WebDSL-Attributes-sig.stx line 16">Attribute</a>) -&gt; <a href="../WebDSL-UI-sig.stx#TemplateElement_256_271" id="TemplateElement_717_732" title="Defined at ../WebDSL-UI-sig.stx line 15">TemplateElement</a>
    <a href="../../../../trans/static-semantics/webdsl-ui.stx#XMLComment_7796_7806" id="XMLComment_737_747" title="Referenced at ../../../../trans/static-semantics/webdsl-ui.stx line 152">XMLComment</a> : <a href="#XMLComment_189_199" id="XMLComment_750_760" title="Defined at line 12">XMLComment</a> -&gt; <a href="../WebDSL-UI-sig.stx#TemplateElement_256_271" id="TemplateElement_764_779" title="Defined at ../WebDSL-UI-sig.stx line 15">TemplateElement</a>
    <a href="../../../../trans/static-semantics/ui/attributes.stx#XMLAttributesIf_1274_1289" id="XMLAttributesIf_784_799" title="Referenced at ../../../../trans/static-semantics/ui/attributes.stx line 35">XMLAttributesIf</a> : <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_802_805" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> * <span class="keyword">list</span>(<a href="../WebDSL-Attributes-sig.stx#Attribute_292_301" id="Attribute_813_822" title="Defined at ../WebDSL-Attributes-sig.stx line 16">Attribute</a>) -&gt; <a href="../WebDSL-Attributes-sig.stx#Attribute_292_301" id="Attribute_827_836" title="Defined at ../WebDSL-Attributes-sig.stx line 16">Attribute</a>
    <a href="../../../../trans/static-semantics/ui/attributes.stx#XMLAttributesIfElse_1448_1467" id="XMLAttributesIfElse_841_860" title="Referenced at ../../../../trans/static-semantics/ui/attributes.stx line 39">XMLAttributesIfElse</a> : <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_863_866" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> * <span class="keyword">list</span>(<a href="../WebDSL-Attributes-sig.stx#Attribute_292_301" id="Attribute_874_883" title="Defined at ../WebDSL-Attributes-sig.stx line 16">Attribute</a>) * <span class="keyword">list</span>(<a href="../WebDSL-Attributes-sig.stx#Attribute_292_301" id="Attribute_892_901" title="Defined at ../WebDSL-Attributes-sig.stx line 16">Attribute</a>) -&gt; <a href="../WebDSL-Attributes-sig.stx#Attribute_292_301" id="Attribute_906_915" title="Defined at ../WebDSL-Attributes-sig.stx line 16">Attribute</a>
    <a href="../../../../trans/static-semantics/ui/attributes.stx#Attribute_1220_1229" id="Attribute_920_929" title="Referenced at ../../../../trans/static-semantics/ui/attributes.stx line 34">Attribute</a> : <a href="#QualName_285_293" id="QualName_932_940" title="Defined at line 16">QualName</a> * <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_943_946" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> -&gt; <a href="../WebDSL-Attributes-sig.stx#Attribute_292_301" id="Attribute_950_959" title="Defined at ../WebDSL-Attributes-sig.stx line 16">Attribute</a>
    <a href="../../../../trans/static-semantics/ui/attributes.stx#CommonAttribute2Attribute_1687_1712" id="CommonAttribute2Attribute_964_989" title="Referenced at ../../../../trans/static-semantics/ui/attributes.stx line 44">CommonAttribute2Attribute</a> : <a href="#CommonAttribute_374_389" id="CommonAttribute_992_1007" title="Defined at line 20">CommonAttribute</a> -&gt; <a href="../WebDSL-Attributes-sig.stx#Attribute_292_301" id="Attribute_1011_1020" title="Defined at ../WebDSL-Attributes-sig.stx line 16">Attribute</a>
    <a href="../../../../trans/static-semantics/ui/attributes.stx#AllAttributes_1919_1932" id="AllAttributes_1025_1038" title="Referenced at ../../../../trans/static-semantics/ui/attributes.stx line 48">AllAttributes</a> : <a href="#CommonAttribute_374_389" id="CommonAttribute_1041_1056" title="Defined at line 20">CommonAttribute</a>
    <a href="../../../../trans/static-semantics/ui/attributes.stx#AllAttributesExceptExp_1960_1982" id="AllAttributesExceptExp_1061_1083" title="Referenced at ../../../../trans/static-semantics/ui/attributes.stx line 49">AllAttributesExceptExp</a> : <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_1086_1089" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> -&gt; <a href="#CommonAttribute_374_389" id="CommonAttribute_1093_1108" title="Defined at line 20">CommonAttribute</a>
    <a href="../../../../trans/static-semantics/ui/attributes.stx#AttributesExp_2317_2330" id="AttributesExp_1113_1126" title="Referenced at ../../../../trans/static-semantics/ui/attributes.stx line 59">AttributesExp</a> : <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_1129_1132" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> -&gt; <a href="#CommonAttribute_374_389" id="CommonAttribute_1136_1151" title="Defined at line 20">CommonAttribute</a>
</code></pre></td></tr></tbody></table></div>