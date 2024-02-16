---
title: WebDSL-Attributes-sig.stx
hide:
  - toc
---

# `WebDSL-Attributes-sig.stx`



[pdmosses/webdsl-statix/webdslstatix/src-gen/statix/signatures/WebDSL-Attributes-sig.stx]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/src-gen/statix/signatures/WebDSL-Attributes-sig.stx "The source file on GitHub"

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
39
40
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <button class="modal-open" id="signatures/WebDSL-Attributes-sig_1_8" title="a definition with multiple references" data-urls="../WebDSL-Expand-sig.stx/#signatures/WebDSL-Attributes-sig line 9_3; ../WebDSL-JavaScript-sig.stx/#signatures/WebDSL-Attributes-sig line 5_3; ../webdsl-statix-sig.stx/#signatures/WebDSL-Attributes-sig line 7_3; ../WebDSL-UI-sig.stx/#signatures/WebDSL-Attributes-sig line 5_3; ../WebDSL-XML-sig.stx/#signatures/WebDSL-Attributes-sig line 6_3"><span class="token sort_Id">signatures/WebDSL-Attributes-sig</span></button>

<span class="keyword">imports</span>
  <a href="../WebDSL-Action-sig.stx/#signatures/WebDSL-Action-sig_1_8" id="signatures/WebDSL-Action-sig_4_3" title="a reference to a single-file definition"><span class="token sort_Id">signatures/WebDSL-Action-sig</span></a>
  <a href="../WebDSL-Lexical-sig.stx/#signatures/WebDSL-Lexical-sig_1_8" id="signatures/WebDSL-Lexical-sig_5_3" title="a reference to a single-file definition"><span class="token sort_Id">signatures/WebDSL-Lexical-sig</span></a>
  <a href="../WebDSL-Core-sig.stx/#signatures/WebDSL-Core-sig_1_8" id="signatures/WebDSL-Core-sig_6_3" title="a reference to a single-file definition"><span class="token sort_Id">signatures/WebDSL-Core-sig</span></a>
  <a href="../WebDSL-UI-sig.stx/#signatures/WebDSL-UI-sig_1_8" id="signatures/WebDSL-UI-sig_7_3" title="a reference to a single-file definition"><span class="token sort_Id">signatures/WebDSL-UI-sig</span></a>

<span class="keyword">signature</span>

  <span class="keyword">sorts</span>
    <span class="cons_SortDecl"><button class="modal-open" id="AttributeSelection_12_5" title="a definition with multiple references" data-urls="#AttributeSelection line 20_32, 37_41, 38_45, 39_45, 40_36"><span class="token sort_Id">AttributeSelection</span></button></span>
    <span class="cons_SortDecl"><button class="modal-open" id="AttributeCollectionOverride_13_5" title="a definition with multiple references" data-urls="#AttributeCollectionOverride line 21_41, 29_27, 35_39, 36_35"><span class="token sort_Id">AttributeCollectionOverride</span></button></span>
    <span class="cons_SortDecl"><button class="modal-open" id="AttributeElem_14_5" title="a definition with multiple references" data-urls="#AttributeElem line 22_27, 29_67, 30_44, 31_64, 32_38"><span class="token sort_Id">AttributeElem</span></button></span>
    <span class="cons_SortDecl"><button class="modal-open" id="AttributeIncludeIgnore_15_5" title="a definition with multiple references" data-urls="#AttributeIncludeIgnore line 23_36, 31_38, 33_34, 34_51"><span class="token sort_Id">AttributeIncludeIgnore</span></button></span>
    <span class="cons_SortDecl"><button class="modal-open" id="Attribute_16_5" title="a definition with multiple references" data-urls="#Attribute line 24_23, 40_58; ../WebDSL-Expand-sig.stx/#Attribute line 46_65, 46_78; ../WebDSL-JavaScript-sig.stx/#Attribute line 24_22, 25_25; ../WebDSL-UI-sig.stx/#Attribute line 253_25, 254_30; ../WebDSL-XML-sig.stx/#Attribute line 28_41, 29_36, 30_55, 32_34, 32_48, 33_38, 33_56, 33_70, 34_35, 35_52; ../../../../trans/static-semantics/ui/attributes.stx/#Attribute line 30_25"><span class="token sort_Id">Attribute</span></button></span>
    <span class="cons_SortAlias"><button class="modal-open" id="AttributeId_17_5" title="a definition with multiple references" data-urls="#AttributeId line 30_23, 31_24, 32_23, 34_35, 37_26, 38_30"><span class="token sort_Id">AttributeId</span></button> <span class="operator">=</span> <span class="cons_StringSort"><span class="keyword">string</span></span></span>

  <span class="keyword">constructors</span>
    <span class="cons_OpDecl"><span id="AttributeSelection-Plhdr_20_5" title="a definition with no references"><span class="token sort_Id">AttributeSelection-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#AttributeSelection_12_5" id="AttributeSelection_20_32" title="a reference to a single-file definition"><span class="token sort_Id">AttributeSelection</span></a></span></span>
    <span class="cons_OpDecl"><span id="AttributeCollectionOverride-Plhdr_21_5" title="a definition with no references"><span class="token sort_Id">AttributeCollectionOverride-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#AttributeCollectionOverride_13_5" id="AttributeCollectionOverride_21_41" title="a reference to a single-file definition"><span class="token sort_Id">AttributeCollectionOverride</span></a></span></span>
    <span class="cons_OpDecl"><span id="AttributeElem-Plhdr_22_5" title="a definition with no references"><span class="token sort_Id">AttributeElem-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#AttributeElem_14_5" id="AttributeElem_22_27" title="a reference to a single-file definition"><span class="token sort_Id">AttributeElem</span></a></span></span>
    <span class="cons_OpDecl"><span id="AttributeIncludeIgnore-Plhdr_23_5" title="a definition with no references"><span class="token sort_Id">AttributeIncludeIgnore-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#AttributeIncludeIgnore_15_5" id="AttributeIncludeIgnore_23_36" title="a reference to a single-file definition"><span class="token sort_Id">AttributeIncludeIgnore</span></a></span></span>
    <span class="cons_OpDecl"><span id="Attribute-Plhdr_24_5" title="a definition with no references"><span class="token sort_Id">Attribute-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#Attribute_16_5" id="Attribute_24_23" title="a reference to a single-file definition"><span class="token sort_Id">Attribute</span></a></span></span>

<span class="keyword">signature</span>

  <span class="keyword">constructors</span>
    <span class="cons_OpDecl"><button class="modal-open" id="AttributeCollection_29_5" title="a definition with multiple references" data-urls="../../../../trans/static-semantics/ui/attributes.stx/#AttributeCollection line 71_12, 74_12"><span class="token sort_Id">AttributeCollection</span></button> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#AttributeCollectionOverride_13_5" id="AttributeCollectionOverride_29_27" title="a reference to a single-file definition"><span class="token sort_Id">AttributeCollectionOverride</span></a></span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="../WebDSL-Lexical-sig.stx/#Id_14_5" id="Id_29_57" title="a reference to a single-file definition"><span class="token sort_Id">Id</span></a></span> <span class="operator">*</span> <span class="keyword">list</span><span class="operator">(</span><span class="cons_SimpleSort"><a href="#AttributeElem_14_5" id="AttributeElem_29_67" title="a reference to a single-file definition"><span class="token sort_Id">AttributeElem</span></a></span><span class="operator">)</span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="../WebDSL-Core-sig.stx/#Definition_20_5" id="Definition_29_85" title="a reference to a single-file definition"><span class="token sort_Id">Definition</span></a></span></span>
    <span class="cons_OpDecl"><span id="AttributeAssign_30_5" title="a definition with no references"><span class="token sort_Id">AttributeAssign</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#AttributeId_17_5" id="AttributeId_30_23" title="a reference to a single-file definition"><span class="token sort_Id">AttributeId</span></a></span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="../WebDSL-Action-sig.stx/#Exp_25_5" id="Exp_30_37" title="a reference to a single-file definition"><span class="token sort_Id">Exp</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#AttributeElem_14_5" id="AttributeElem_30_44" title="a reference to a single-file definition"><span class="token sort_Id">AttributeElem</span></a></span></span>
    <span class="cons_OpDecl"><span id="AttributeInclude_31_5" title="a definition with no references"><span class="token sort_Id">AttributeInclude</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#AttributeId_17_5" id="AttributeId_31_24" title="a reference to a single-file definition"><span class="token sort_Id">AttributeId</span></a></span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="#AttributeIncludeIgnore_15_5" id="AttributeIncludeIgnore_31_38" title="a reference to a single-file definition"><span class="token sort_Id">AttributeIncludeIgnore</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#AttributeElem_14_5" id="AttributeElem_31_64" title="a reference to a single-file definition"><span class="token sort_Id">AttributeElem</span></a></span></span>
    <span class="cons_OpDecl"><span id="AttributeIgnore_32_5" title="a definition with no references"><span class="token sort_Id">AttributeIgnore</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#AttributeId_17_5" id="AttributeId_32_23" title="a reference to a single-file definition"><span class="token sort_Id">AttributeId</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#AttributeElem_14_5" id="AttributeElem_32_38" title="a reference to a single-file definition"><span class="token sort_Id">AttributeElem</span></a></span></span>
    <span class="cons_OpDecl"><span id="AttributeIncludeIgnoreNone_33_5" title="a definition with no references"><span class="token sort_Id">AttributeIncludeIgnoreNone</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#AttributeIncludeIgnore_15_5" id="AttributeIncludeIgnore_33_34" title="a reference to a single-file definition"><span class="token sort_Id">AttributeIncludeIgnore</span></a></span></span>
    <span class="cons_OpDecl"><span id="AttributeIncludeIgnore_34_5" title="a definition with no references"><span class="token sort_Id">AttributeIncludeIgnore</span></span> <span class="operator">:</span> <span class="keyword">list</span><span class="operator">(</span><span class="cons_SimpleSort"><a href="#AttributeId_17_5" id="AttributeId_34_35" title="a reference to a single-file definition"><span class="token sort_Id">AttributeId</span></a></span><span class="operator">)</span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#AttributeIncludeIgnore_15_5" id="AttributeIncludeIgnore_34_51" title="a reference to a single-file definition"><span class="token sort_Id">AttributeIncludeIgnore</span></a></span></span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/ui/attributes.stx/#AttributeCollectionOverrideNone_71_32" id="AttributeCollectionOverrideNone_35_5" title="a definition with a single reference"><span class="token sort_Id">AttributeCollectionOverrideNone</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#AttributeCollectionOverride_13_5" id="AttributeCollectionOverride_35_39" title="a reference to a single-file definition"><span class="token sort_Id">AttributeCollectionOverride</span></a></span></span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/ui/attributes.stx/#AttributeCollectionOverride_74_32" id="AttributeCollectionOverride_36_5" title="a definition with a single reference"><span class="token sort_Id">AttributeCollectionOverride</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#AttributeCollectionOverride_13_5" id="AttributeCollectionOverride_36_35" title="a reference to a single-file definition"><span class="token sort_Id">AttributeCollectionOverride</span></a></span></span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/ui/template-calls.stx/#AttributeSelection_122_69" id="AttributeSelection_37_5" title="a definition with a single reference"><span class="token sort_Id">AttributeSelection</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#AttributeId_17_5" id="AttributeId_37_26" title="a reference to a single-file definition"><span class="token sort_Id">AttributeId</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#AttributeSelection_12_5" id="AttributeSelection_37_41" title="a reference to a single-file definition"><span class="token sort_Id">AttributeSelection</span></a></span></span>
    <span class="cons_OpDecl"><button class="modal-open" id="AttributeIgnoreDefault_38_5" title="a definition with multiple references" data-urls="../../../../trans/static-semantics/ui/template-calls.stx/#AttributeIgnoreDefault line 114_69, 115_69, 116_69"><span class="token sort_Id">AttributeIgnoreDefault</span></button> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#AttributeId_17_5" id="AttributeId_38_30" title="a reference to a single-file definition"><span class="token sort_Id">AttributeId</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#AttributeSelection_12_5" id="AttributeSelection_38_45" title="a reference to a single-file definition"><span class="token sort_Id">AttributeSelection</span></a></span></span>
    <span class="cons_OpDecl"><button class="modal-open" id="AttributeSelection2PropertyAssignment_39_5" title="a definition with multiple references" data-urls="../../../../trans/static-semantics/ui/template-calls.stx/#AttributeSelection2PropertyAssignment line 114_31, 115_31, 116_31, 122_31"><span class="token sort_Id">AttributeSelection2PropertyAssignment</span></button> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#AttributeSelection_12_5" id="AttributeSelection_39_45" title="a reference to a single-file definition"><span class="token sort_Id">AttributeSelection</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="../WebDSL-UI-sig.stx/#PropertyAssignment_19_5" id="PropertyAssignment_39_67" title="a reference to a single-file definition"><span class="token sort_Id">PropertyAssignment</span></a></span></span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/ui/attributes.stx/#AttributeSelection2Attribute_31_20" id="AttributeSelection2Attribute_40_5" title="a definition with a single reference"><span class="token sort_Id">AttributeSelection2Attribute</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#AttributeSelection_12_5" id="AttributeSelection_40_36" title="a reference to a single-file definition"><span class="token sort_Id">AttributeSelection</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#Attribute_16_5" id="Attribute_40_58" title="a reference to a single-file definition"><span class="token sort_Id">Attribute</span></a></span></span>
</code></pre></td></tr></tbody></table></div>

<div id="modal">
  <div id="modal-content">
    <span id="modal-close">&times;</span>
    <h2 id="modal-h2"></h2>
    <p  id="modal-p"></p>
    <ul id="modal-ul"></ul>
  </div>
</div>
