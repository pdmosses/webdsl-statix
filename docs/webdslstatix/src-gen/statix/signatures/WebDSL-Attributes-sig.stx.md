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
<td class="code"><pre><code><span class="keyword">module</span> <button class="modal-open" id="signatures/WebDSL-Attributes-sig_1_8" title="Multi-file references" data-urls="../WebDSL-Expand-sig.stx/#signatures/WebDSL-Attributes-sig_9_3 line 9; ../WebDSL-JavaScript-sig.stx/#signatures/WebDSL-Attributes-sig_5_3 line 5; ../webdsl-statix-sig.stx/#signatures/WebDSL-Attributes-sig_7_3 line 7; ../WebDSL-UI-sig.stx/#signatures/WebDSL-Attributes-sig_5_3 line 5; ../WebDSL-XML-sig.stx/#signatures/WebDSL-Attributes-sig_6_3 line 6"><span class="token sort_Id">signatures/WebDSL-Attributes-sig</span></button>

<span class="keyword">imports</span>
  <a href="../WebDSL-Action-sig.stx/#signatures/WebDSL-Action-sig_1_8" id="signatures/WebDSL-Action-sig_4_3" title="Defined at ../WebDSL-Action-sig.stx line 1"><span class="token sort_Id">signatures/WebDSL-Action-sig</span></a>
  <a href="../WebDSL-Lexical-sig.stx/#signatures/WebDSL-Lexical-sig_1_8" id="signatures/WebDSL-Lexical-sig_5_3" title="Defined at ../WebDSL-Lexical-sig.stx line 1"><span class="token sort_Id">signatures/WebDSL-Lexical-sig</span></a>
  <a href="../WebDSL-Core-sig.stx/#signatures/WebDSL-Core-sig_1_8" id="signatures/WebDSL-Core-sig_6_3" title="Defined at ../WebDSL-Core-sig.stx line 1"><span class="token sort_Id">signatures/WebDSL-Core-sig</span></a>
  <a href="../WebDSL-UI-sig.stx/#signatures/WebDSL-UI-sig_1_8" id="signatures/WebDSL-UI-sig_7_3" title="Defined at ../WebDSL-UI-sig.stx line 1"><span class="token sort_Id">signatures/WebDSL-UI-sig</span></a>

<span class="keyword">signature</span>

  <span class="keyword">sorts</span>
    <span class="cons_SortDecl"><a href="#AttributeSelection_20_32" id="AttributeSelection_12_5" title="Referenced at line 20, 37, 38, 39, 40"><span class="token sort_Id">AttributeSelection</span></a></span>
    <span class="cons_SortDecl"><a href="#AttributeCollectionOverride_21_41" id="AttributeCollectionOverride_13_5" title="Referenced at line 21, 29, 35, 36"><span class="token sort_Id">AttributeCollectionOverride</span></a></span>
    <span class="cons_SortDecl"><a href="#AttributeElem_22_27" id="AttributeElem_14_5" title="Referenced at line 22, 29, 30, 31, 32"><span class="token sort_Id">AttributeElem</span></a></span>
    <span class="cons_SortDecl"><a href="#AttributeIncludeIgnore_23_36" id="AttributeIncludeIgnore_15_5" title="Referenced at line 23, 31, 33, 34"><span class="token sort_Id">AttributeIncludeIgnore</span></a></span>
    <span class="cons_SortDecl"><button class="modal-open" id="Attribute_16_5" title="Multi-file references" data-urls="#Attribute_24_23 line 24, 40; ../WebDSL-Expand-sig.stx/#Attribute_46_65 line 46; ../WebDSL-JavaScript-sig.stx/#Attribute_24_22 line 24, 25; ../WebDSL-UI-sig.stx/#Attribute_253_25 line 253, 254; ../WebDSL-XML-sig.stx/#Attribute_28_41 line 28, 29, 30, 32, 33, 34, 35; ../../../../trans/static-semantics/ui/attributes.stx/#Attribute_30_25 line 30"><span class="token sort_Id">Attribute</span></button></span>
    <span class="cons_SortAlias"><a href="#AttributeId_30_23" id="AttributeId_17_5" title="Referenced at line 30, 31, 32, 34, 37, 38"><span class="token sort_Id">AttributeId</span></a> <span class="operator">=</span> <span class="cons_StringSort">string</span></span>

  <span class="keyword">constructors</span>
    <span class="cons_OpDecl"><span id="AttributeSelection-Plhdr_20_5" title="Not referenced"><span class="token sort_Id">AttributeSelection-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#AttributeSelection_12_5" id="AttributeSelection_20_32" title="Defined at line 12"><span class="token sort_Id">AttributeSelection</span></a></span></span>
    <span class="cons_OpDecl"><span id="AttributeCollectionOverride-Plhdr_21_5" title="Not referenced"><span class="token sort_Id">AttributeCollectionOverride-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#AttributeCollectionOverride_13_5" id="AttributeCollectionOverride_21_41" title="Defined at line 13"><span class="token sort_Id">AttributeCollectionOverride</span></a></span></span>
    <span class="cons_OpDecl"><span id="AttributeElem-Plhdr_22_5" title="Not referenced"><span class="token sort_Id">AttributeElem-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#AttributeElem_14_5" id="AttributeElem_22_27" title="Defined at line 14"><span class="token sort_Id">AttributeElem</span></a></span></span>
    <span class="cons_OpDecl"><span id="AttributeIncludeIgnore-Plhdr_23_5" title="Not referenced"><span class="token sort_Id">AttributeIncludeIgnore-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#AttributeIncludeIgnore_15_5" id="AttributeIncludeIgnore_23_36" title="Defined at line 15"><span class="token sort_Id">AttributeIncludeIgnore</span></a></span></span>
    <span class="cons_OpDecl"><span id="Attribute-Plhdr_24_5" title="Not referenced"><span class="token sort_Id">Attribute-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#Attribute_16_5" id="Attribute_24_23" title="Defined at line 16"><span class="token sort_Id">Attribute</span></a></span></span>

<span class="keyword">signature</span>

  <span class="keyword">constructors</span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/ui/attributes.stx/#AttributeCollection_71_12" id="AttributeCollection_29_5" title="Referenced at ../../../../trans/static-semantics/ui/attributes.stx line 71, 74"><span class="token sort_Id">AttributeCollection</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#AttributeCollectionOverride_13_5" id="AttributeCollectionOverride_29_27" title="Defined at line 13"><span class="token sort_Id">AttributeCollectionOverride</span></a></span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="../WebDSL-Lexical-sig.stx/#Id_14_5" id="Id_29_57" title="Defined at ../WebDSL-Lexical-sig.stx line 14"><span class="token sort_Id">Id</span></a></span> <span class="operator">*</span> <span class="keyword">list</span><span class="operator">(</span><span class="cons_SimpleSort"><a href="#AttributeElem_14_5" id="AttributeElem_29_67" title="Defined at line 14"><span class="token sort_Id">AttributeElem</span></a></span><span class="operator">)</span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="../WebDSL-Core-sig.stx/#Definition_20_5" id="Definition_29_85" title="Defined at ../WebDSL-Core-sig.stx line 20"><span class="token sort_Id">Definition</span></a></span></span>
    <span class="cons_OpDecl"><span id="AttributeAssign_30_5" title="Not referenced"><span class="token sort_Id">AttributeAssign</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#AttributeId_17_5" id="AttributeId_30_23" title="Defined at line 17"><span class="token sort_Id">AttributeId</span></a></span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="../WebDSL-Action-sig.stx/#Exp_25_5" id="Exp_30_37" title="Defined at ../WebDSL-Action-sig.stx line 25"><span class="token sort_Id">Exp</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#AttributeElem_14_5" id="AttributeElem_30_44" title="Defined at line 14"><span class="token sort_Id">AttributeElem</span></a></span></span>
    <span class="cons_OpDecl"><span id="AttributeInclude_31_5" title="Not referenced"><span class="token sort_Id">AttributeInclude</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#AttributeId_17_5" id="AttributeId_31_24" title="Defined at line 17"><span class="token sort_Id">AttributeId</span></a></span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="#AttributeIncludeIgnore_15_5" id="AttributeIncludeIgnore_31_38" title="Defined at line 15"><span class="token sort_Id">AttributeIncludeIgnore</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#AttributeElem_14_5" id="AttributeElem_31_64" title="Defined at line 14"><span class="token sort_Id">AttributeElem</span></a></span></span>
    <span class="cons_OpDecl"><span id="AttributeIgnore_32_5" title="Not referenced"><span class="token sort_Id">AttributeIgnore</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#AttributeId_17_5" id="AttributeId_32_23" title="Defined at line 17"><span class="token sort_Id">AttributeId</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#AttributeElem_14_5" id="AttributeElem_32_38" title="Defined at line 14"><span class="token sort_Id">AttributeElem</span></a></span></span>
    <span class="cons_OpDecl"><span id="AttributeIncludeIgnoreNone_33_5" title="Not referenced"><span class="token sort_Id">AttributeIncludeIgnoreNone</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#AttributeIncludeIgnore_15_5" id="AttributeIncludeIgnore_33_34" title="Defined at line 15"><span class="token sort_Id">AttributeIncludeIgnore</span></a></span></span>
    <span class="cons_OpDecl"><span id="AttributeIncludeIgnore_34_5" title="Not referenced"><span class="token sort_Id">AttributeIncludeIgnore</span></span> <span class="operator">:</span> <span class="keyword">list</span><span class="operator">(</span><span class="cons_SimpleSort"><a href="#AttributeId_17_5" id="AttributeId_34_35" title="Defined at line 17"><span class="token sort_Id">AttributeId</span></a></span><span class="operator">)</span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#AttributeIncludeIgnore_15_5" id="AttributeIncludeIgnore_34_51" title="Defined at line 15"><span class="token sort_Id">AttributeIncludeIgnore</span></a></span></span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/ui/attributes.stx/#AttributeCollectionOverrideNone_71_32" id="AttributeCollectionOverrideNone_35_5" title="Referenced at ../../../../trans/static-semantics/ui/attributes.stx line 71"><span class="token sort_Id">AttributeCollectionOverrideNone</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#AttributeCollectionOverride_13_5" id="AttributeCollectionOverride_35_39" title="Defined at line 13"><span class="token sort_Id">AttributeCollectionOverride</span></a></span></span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/ui/attributes.stx/#AttributeCollectionOverride_74_32" id="AttributeCollectionOverride_36_5" title="Referenced at ../../../../trans/static-semantics/ui/attributes.stx line 74"><span class="token sort_Id">AttributeCollectionOverride</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#AttributeCollectionOverride_13_5" id="AttributeCollectionOverride_36_35" title="Defined at line 13"><span class="token sort_Id">AttributeCollectionOverride</span></a></span></span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/ui/template-calls.stx/#AttributeSelection_122_69" id="AttributeSelection_37_5" title="Referenced at ../../../../trans/static-semantics/ui/template-calls.stx line 122"><span class="token sort_Id">AttributeSelection</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#AttributeId_17_5" id="AttributeId_37_26" title="Defined at line 17"><span class="token sort_Id">AttributeId</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#AttributeSelection_12_5" id="AttributeSelection_37_41" title="Defined at line 12"><span class="token sort_Id">AttributeSelection</span></a></span></span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/ui/template-calls.stx/#AttributeIgnoreDefault_114_69" id="AttributeIgnoreDefault_38_5" title="Referenced at ../../../../trans/static-semantics/ui/template-calls.stx line 114, 115, 116"><span class="token sort_Id">AttributeIgnoreDefault</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#AttributeId_17_5" id="AttributeId_38_30" title="Defined at line 17"><span class="token sort_Id">AttributeId</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#AttributeSelection_12_5" id="AttributeSelection_38_45" title="Defined at line 12"><span class="token sort_Id">AttributeSelection</span></a></span></span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/ui/template-calls.stx/#AttributeSelection2PropertyAssignment_114_31" id="AttributeSelection2PropertyAssignment_39_5" title="Referenced at ../../../../trans/static-semantics/ui/template-calls.stx line 114, 115, 116, 122"><span class="token sort_Id">AttributeSelection2PropertyAssignment</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#AttributeSelection_12_5" id="AttributeSelection_39_45" title="Defined at line 12"><span class="token sort_Id">AttributeSelection</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="../WebDSL-UI-sig.stx/#PropertyAssignment_19_5" id="PropertyAssignment_39_67" title="Defined at ../WebDSL-UI-sig.stx line 19"><span class="token sort_Id">PropertyAssignment</span></a></span></span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/ui/attributes.stx/#AttributeSelection2Attribute_31_20" id="AttributeSelection2Attribute_40_5" title="Referenced at ../../../../trans/static-semantics/ui/attributes.stx line 31"><span class="token sort_Id">AttributeSelection2Attribute</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#AttributeSelection_12_5" id="AttributeSelection_40_36" title="Defined at line 12"><span class="token sort_Id">AttributeSelection</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#Attribute_16_5" id="Attribute_40_58" title="Defined at line 16"><span class="token sort_Id">Attribute</span></a></span></span>
</code></pre></td></tr></tbody></table></div>

<div id="modal">
  <div id="modal-content">
    <span id="modal-close">&times;</span>
    <h2 id="modal-h2"></h2>
    <p  id="modal-p"></p>
    <ul id="modal-ul"></ul>
  </div>
</div>
