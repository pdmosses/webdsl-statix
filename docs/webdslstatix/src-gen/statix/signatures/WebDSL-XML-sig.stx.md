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
<td class="code"><pre><code><span class="keyword">module</span> <button class="modal-open" id="signatures/WebDSL-XML-sig_1_8" title="a definition with multiple references" data-urls="../WebDSL-JavaScript-sig.stx/#signatures/WebDSL-XML-sig line 7_3; ../webdsl-statix-sig.stx/#signatures/WebDSL-XML-sig line 28_3; ../WebDSL-UI-sig.stx/#signatures/WebDSL-XML-sig line 8_3"><span class="token sort_Id">signatures/WebDSL-XML-sig</span></button>

<span class="keyword">imports</span>
  <a href="../WebDSL-Action-sig.stx/#signatures/WebDSL-Action-sig_1_8" id="signatures/WebDSL-Action-sig_4_3" title="a reference to a single-file definition"><span class="token sort_Id">signatures/WebDSL-Action-sig</span></a>
  <a href="../WebDSL-UI-sig.stx/#signatures/WebDSL-UI-sig_1_8" id="signatures/WebDSL-UI-sig_5_3" title="a reference to a single-file definition"><span class="token sort_Id">signatures/WebDSL-UI-sig</span></a>
  <a href="../WebDSL-Attributes-sig.stx/#signatures/WebDSL-Attributes-sig_1_8" id="signatures/WebDSL-Attributes-sig_6_3" title="a reference to a single-file definition"><span class="token sort_Id">signatures/WebDSL-Attributes-sig</span></a>

<span class="keyword">signature</span>

  <span class="keyword">sorts</span>
    <span class="cons_SortAlias"><a href="#HTML5VoidElement_30_31" id="HTML5VoidElement_11_5" title="a definition with a single reference"><span class="token sort_Id">HTML5VoidElement</span></a> <span class="operator">=</span> <span class="cons_StringSort"><span class="keyword">string</span></span></span>
    <span class="cons_SortAlias"><a href="#XMLComment_31_18" id="XMLComment_12_5" title="a definition with a single reference"><span class="token sort_Id">XMLComment</span></a> <span class="operator">=</span> <span class="cons_StringSort"><span class="keyword">string</span></span></span>
    <span class="cons_SortAlias"><span id="XMLCommentChar_13_5" title="a definition with no references"><span class="token sort_Id">XMLCommentChar</span></span> <span class="operator">=</span> <span class="cons_StringSort"><span class="keyword">string</span></span></span>
    <span class="cons_SortAlias"><span id="OneDash_14_5" title="a definition with no references"><span class="token sort_Id">OneDash</span></span> <span class="operator">=</span> <span class="cons_StringSort"><span class="keyword">string</span></span></span>
    <span class="cons_SortAlias"><span id="TwoDashes_15_5" title="a definition with no references"><span class="token sort_Id">TwoDashes</span></span> <span class="operator">=</span> <span class="cons_StringSort"><span class="keyword">string</span></span></span>
    <span class="cons_SortAlias"><a href="#QualName_34_17" id="QualName_16_5" title="a definition with a single reference"><span class="token sort_Id">QualName</span></a> <span class="operator">=</span> <span class="cons_StringSort"><span class="keyword">string</span></span></span>
    <span class="cons_SortAlias"><span id="Qualifier_17_5" title="a definition with no references"><span class="token sort_Id">Qualifier</span></span> <span class="operator">=</span> <span class="cons_StringSort"><span class="keyword">string</span></span></span>
    <span class="cons_SortAlias"><span id="NCName_18_5" title="a definition with no references"><span class="token sort_Id">NCName</span></span> <span class="operator">=</span> <span class="cons_StringSort"><span class="keyword">string</span></span></span>
    <span class="cons_SortAlias"><button class="modal-open" id="XMLTagName_19_5" title="a definition with multiple references" data-urls="#XMLTagName line 28_23, 29_18, 29_73"><span class="token sort_Id">XMLTagName</span></button> <span class="operator">=</span> <span class="cons_StringSort"><span class="keyword">string</span></span></span>
    <span class="cons_SortDecl"><button class="modal-open" id="CommonAttribute_20_5" title="a definition with multiple references" data-urls="#CommonAttribute line 23_29, 35_33, 36_21, 37_37, 38_28; ../WebDSL-UI-sig.stx/#CommonAttribute line 222_42; ../../../../trans/static-semantics/ui/attributes.stx/#CommonAttribute line 46_31"><span class="token sort_Id">CommonAttribute</span></button></span>

  <span class="keyword">constructors</span>
    <span class="cons_OpDecl"><span id="CommonAttribute-Plhdr_23_5" title="a definition with no references"><span class="token sort_Id">CommonAttribute-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#CommonAttribute_20_5" id="CommonAttribute_23_29" title="a reference to a single-file definition"><span class="token sort_Id">CommonAttribute</span></a></span></span>

<span class="keyword">signature</span>

  <span class="keyword">constructors</span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/webdsl-ui.stx/#XMLEmptyElement_154_30" id="XMLEmptyElement_28_5" title="a definition with a single reference"><span class="token sort_Id">XMLEmptyElement</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#XMLTagName_19_5" id="XMLTagName_28_23" title="a reference to a single-file definition"><span class="token sort_Id">XMLTagName</span></a></span> <span class="operator">*</span> <span class="keyword">list</span><span class="operator">(</span><span class="cons_SimpleSort"><a href="../WebDSL-Attributes-sig.stx/#Attribute_16_5" id="Attribute_28_41" title="a reference to a single-file definition"><span class="token sort_Id">Attribute</span></a></span><span class="operator">)</span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="../WebDSL-UI-sig.stx/#TemplateElement_15_5" id="TemplateElement_28_55" title="a reference to a single-file definition"><span class="token sort_Id">TemplateElement</span></a></span></span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/webdsl-ui.stx/#XMLElement_160_34" id="XMLElement_29_5" title="a definition with a single reference"><span class="token sort_Id">XMLElement</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#XMLTagName_19_5" id="XMLTagName_29_18" title="a reference to a single-file definition"><span class="token sort_Id">XMLTagName</span></a></span> <span class="operator">*</span> <span class="keyword">list</span><span class="operator">(</span><span class="cons_SimpleSort"><a href="../WebDSL-Attributes-sig.stx/#Attribute_16_5" id="Attribute_29_36" title="a reference to a single-file definition"><span class="token sort_Id">Attribute</span></a></span><span class="operator">)</span> <span class="operator">*</span> <span class="keyword">list</span><span class="operator">(</span><span class="cons_SimpleSort"><a href="../WebDSL-UI-sig.stx/#TemplateElement_15_5" id="TemplateElement_29_54" title="a reference to a single-file definition"><span class="token sort_Id">TemplateElement</span></a></span><span class="operator">)</span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="#XMLTagName_19_5" id="XMLTagName_29_73" title="a reference to a single-file definition"><span class="token sort_Id">XMLTagName</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="../WebDSL-UI-sig.stx/#TemplateElement_15_5" id="TemplateElement_29_87" title="a reference to a single-file definition"><span class="token sort_Id">TemplateElement</span></a></span></span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/webdsl-ui.stx/#XMLEmptyElementUnclosed_157_30" id="XMLEmptyElementUnclosed_30_5" title="a definition with a single reference"><span class="token sort_Id">XMLEmptyElementUnclosed</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#HTML5VoidElement_11_5" id="HTML5VoidElement_30_31" title="a reference to a single-file definition"><span class="token sort_Id">HTML5VoidElement</span></a></span> <span class="operator">*</span> <span class="keyword">list</span><span class="operator">(</span><span class="cons_SimpleSort"><a href="../WebDSL-Attributes-sig.stx/#Attribute_16_5" id="Attribute_30_55" title="a reference to a single-file definition"><span class="token sort_Id">Attribute</span></a></span><span class="operator">)</span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="../WebDSL-UI-sig.stx/#TemplateElement_15_5" id="TemplateElement_30_69" title="a reference to a single-file definition"><span class="token sort_Id">TemplateElement</span></a></span></span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/webdsl-ui.stx/#XMLComment_152_31" id="XMLComment_31_5" title="a definition with a single reference"><span class="token sort_Id">XMLComment</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#XMLComment_12_5" id="XMLComment_31_18" title="a reference to a single-file definition"><span class="token sort_Id">XMLComment</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="../WebDSL-UI-sig.stx/#TemplateElement_15_5" id="TemplateElement_31_32" title="a reference to a single-file definition"><span class="token sort_Id">TemplateElement</span></a></span></span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/ui/attributes.stx/#XMLAttributesIf_35_18" id="XMLAttributesIf_32_5" title="a definition with a single reference"><span class="token sort_Id">XMLAttributesIf</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="../WebDSL-Action-sig.stx/#Exp_25_5" id="Exp_32_23" title="a reference to a single-file definition"><span class="token sort_Id">Exp</span></a></span> <span class="operator">*</span> <span class="keyword">list</span><span class="operator">(</span><span class="cons_SimpleSort"><a href="../WebDSL-Attributes-sig.stx/#Attribute_16_5" id="Attribute_32_34" title="a reference to a single-file definition"><span class="token sort_Id">Attribute</span></a></span><span class="operator">)</span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="../WebDSL-Attributes-sig.stx/#Attribute_16_5" id="Attribute_32_48" title="a reference to a single-file definition"><span class="token sort_Id">Attribute</span></a></span></span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/ui/attributes.stx/#XMLAttributesIfElse_39_18" id="XMLAttributesIfElse_33_5" title="a definition with a single reference"><span class="token sort_Id">XMLAttributesIfElse</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="../WebDSL-Action-sig.stx/#Exp_25_5" id="Exp_33_27" title="a reference to a single-file definition"><span class="token sort_Id">Exp</span></a></span> <span class="operator">*</span> <span class="keyword">list</span><span class="operator">(</span><span class="cons_SimpleSort"><a href="../WebDSL-Attributes-sig.stx/#Attribute_16_5" id="Attribute_33_38" title="a reference to a single-file definition"><span class="token sort_Id">Attribute</span></a></span><span class="operator">)</span> <span class="operator">*</span> <span class="keyword">list</span><span class="operator">(</span><span class="cons_SimpleSort"><a href="../WebDSL-Attributes-sig.stx/#Attribute_16_5" id="Attribute_33_56" title="a reference to a single-file definition"><span class="token sort_Id">Attribute</span></a></span><span class="operator">)</span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="../WebDSL-Attributes-sig.stx/#Attribute_16_5" id="Attribute_33_70" title="a reference to a single-file definition"><span class="token sort_Id">Attribute</span></a></span></span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/ui/attributes.stx/#Attribute_34_18" id="Attribute_34_5" title="a definition with a single reference"><span class="token sort_Id">Attribute</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#QualName_16_5" id="QualName_34_17" title="a reference to a single-file definition"><span class="token sort_Id">QualName</span></a></span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="../WebDSL-Action-sig.stx/#Exp_25_5" id="Exp_34_28" title="a reference to a single-file definition"><span class="token sort_Id">Exp</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="../WebDSL-Attributes-sig.stx/#Attribute_16_5" id="Attribute_34_35" title="a reference to a single-file definition"><span class="token sort_Id">Attribute</span></a></span></span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/ui/attributes.stx/#CommonAttribute2Attribute_44_18" id="CommonAttribute2Attribute_35_5" title="a definition with a single reference"><span class="token sort_Id">CommonAttribute2Attribute</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#CommonAttribute_20_5" id="CommonAttribute_35_33" title="a reference to a single-file definition"><span class="token sort_Id">CommonAttribute</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="../WebDSL-Attributes-sig.stx/#Attribute_16_5" id="Attribute_35_52" title="a reference to a single-file definition"><span class="token sort_Id">Attribute</span></a></span></span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/ui/attributes.stx/#AllAttributes_48_24" id="AllAttributes_36_5" title="a definition with a single reference"><span class="token sort_Id">AllAttributes</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#CommonAttribute_20_5" id="CommonAttribute_36_21" title="a reference to a single-file definition"><span class="token sort_Id">CommonAttribute</span></a></span></span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/ui/attributes.stx/#AllAttributesExceptExp_49_24" id="AllAttributesExceptExp_37_5" title="a definition with a single reference"><span class="token sort_Id">AllAttributesExceptExp</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="../WebDSL-Action-sig.stx/#Exp_25_5" id="Exp_37_30" title="a reference to a single-file definition"><span class="token sort_Id">Exp</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#CommonAttribute_20_5" id="CommonAttribute_37_37" title="a reference to a single-file definition"><span class="token sort_Id">CommonAttribute</span></a></span></span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/ui/attributes.stx/#AttributesExp_59_24" id="AttributesExp_38_5" title="a definition with a single reference"><span class="token sort_Id">AttributesExp</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="../WebDSL-Action-sig.stx/#Exp_25_5" id="Exp_38_21" title="a reference to a single-file definition"><span class="token sort_Id">Exp</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#CommonAttribute_20_5" id="CommonAttribute_38_28" title="a reference to a single-file definition"><span class="token sort_Id">CommonAttribute</span></a></span></span>
</code></pre></td></tr></tbody></table></div>

<div id="modal">
  <div id="modal-content">
    <span id="modal-close">&times;</span>
    <h2 id="modal-h2"></h2>
    <p  id="modal-p"></p>
    <ul id="modal-ul"></ul>
  </div>
</div>
