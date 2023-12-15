---
title: WebDSL-Dispatch-sig.stx
hide:
  - toc
---

# `WebDSL-Dispatch-sig.stx`



[pdmosses/webdsl-statix/webdslstatix/src-gen/statix/signatures/WebDSL-Dispatch-sig.stx]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/src-gen/statix/signatures/WebDSL-Dispatch-sig.stx "The source file on GitHub"

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
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl-statix-sig.stx/#signatures/WebDSL-Dispatch-sig_11_3" id="signatures/WebDSL-Dispatch-sig_1_8" title="Referenced at ../webdsl-statix-sig.stx line 11"><span class="token sort_Id">signatures/WebDSL-Dispatch-sig</span></a>

<span class="keyword">imports</span>
  <a href="../WebDSL-Action-sig.stx/#signatures/WebDSL-Action-sig_1_8" id="signatures/WebDSL-Action-sig_4_3" title="Defined at ../WebDSL-Action-sig.stx line 1"><span class="token sort_Id">signatures/WebDSL-Action-sig</span></a>
  <a href="../WebDSL-Core-sig.stx/#signatures/WebDSL-Core-sig_1_8" id="signatures/WebDSL-Core-sig_5_3" title="Defined at ../WebDSL-Core-sig.stx line 1"><span class="token sort_Id">signatures/WebDSL-Core-sig</span></a>
  <a href="../WebDSL-Lexical-sig.stx/#signatures/WebDSL-Lexical-sig_1_8" id="signatures/WebDSL-Lexical-sig_6_3" title="Defined at ../WebDSL-Lexical-sig.stx line 1"><span class="token sort_Id">signatures/WebDSL-Lexical-sig</span></a>
  <a href="../WebDSL-UI-sig.stx/#signatures/WebDSL-UI-sig_1_8" id="signatures/WebDSL-UI-sig_7_3" title="Defined at ../WebDSL-UI-sig.stx line 1"><span class="token sort_Id">signatures/WebDSL-UI-sig</span></a>

<span class="keyword">signature</span>

  <span class="keyword">sorts</span>
    <span class="cons_SortDecl"><a href="#DispatchEntry_19_27" id="DispatchEntry_12_5" title="Referenced at line 19, 28, 29, 30"><span class="token sort_Id">DispatchEntry</span></a></span>
    <span class="cons_SortDecl"><a href="#DispatchDefault_20_29" id="DispatchDefault_13_5" title="Referenced at line 20, 28, 31, 32"><span class="token sort_Id">DispatchDefault</span></a></span>
    <span class="cons_SortDecl"><a href="#DispatchNavigateCall_21_34" id="DispatchNavigateCall_14_5" title="Referenced at line 21, 35, 36, 37, 38"><span class="token sort_Id">DispatchNavigateCall</span></a></span>
    <span class="cons_SortDecl"><a href="#DispatchNavigate_22_30" id="DispatchNavigate_15_5" title="Referenced at line 22, 33, 35"><span class="token sort_Id">DispatchNavigate</span></a></span>
    <span class="cons_SortDecl"><a href="#DispatchNavigateButton_23_36" id="DispatchNavigateButton_16_5" title="Referenced at line 23, 34, 36"><span class="token sort_Id">DispatchNavigateButton</span></a></span>

  <span class="keyword">constructors</span>
    <span class="cons_OpDecl"><span id="DispatchEntry-Plhdr_19_5" title="Not referenced"><span class="token sort_Id">DispatchEntry-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#DispatchEntry_12_5" id="DispatchEntry_19_27" title="Defined at line 12"><span class="token sort_Id">DispatchEntry</span></a></span></span>
    <span class="cons_OpDecl"><span id="DispatchDefault-Plhdr_20_5" title="Not referenced"><span class="token sort_Id">DispatchDefault-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#DispatchDefault_13_5" id="DispatchDefault_20_29" title="Defined at line 13"><span class="token sort_Id">DispatchDefault</span></a></span></span>
    <span class="cons_OpDecl"><span id="DispatchNavigateCall-Plhdr_21_5" title="Not referenced"><span class="token sort_Id">DispatchNavigateCall-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#DispatchNavigateCall_14_5" id="DispatchNavigateCall_21_34" title="Defined at line 14"><span class="token sort_Id">DispatchNavigateCall</span></a></span></span>
    <span class="cons_OpDecl"><span id="DispatchNavigate-Plhdr_22_5" title="Not referenced"><span class="token sort_Id">DispatchNavigate-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#DispatchNavigate_15_5" id="DispatchNavigate_22_30" title="Defined at line 15"><span class="token sort_Id">DispatchNavigate</span></a></span></span>
    <span class="cons_OpDecl"><span id="DispatchNavigateButton-Plhdr_23_5" title="Not referenced"><span class="token sort_Id">DispatchNavigateButton-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#DispatchNavigateButton_16_5" id="DispatchNavigateButton_23_36" title="Defined at line 16"><span class="token sort_Id">DispatchNavigateButton</span></a></span></span>

<span class="keyword">signature</span>

  <span class="keyword">constructors</span>
    <span class="cons_OpDecl"><span id="Dispatch_28_5" title="Not referenced"><span class="token sort_Id">Dispatch</span></span> <span class="operator">:</span> <span class="keyword">list</span><span class="operator">(</span><span class="cons_SimpleSort"><a href="#DispatchEntry_12_5" id="DispatchEntry_28_21" title="Defined at line 12"><span class="token sort_Id">DispatchEntry</span></a></span><span class="operator">)</span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="#DispatchDefault_13_5" id="DispatchDefault_28_38" title="Defined at line 13"><span class="token sort_Id">DispatchDefault</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="../WebDSL-UI-sig.stx/#TemplateElement_15_5" id="TemplateElement_28_57" title="Defined at ../WebDSL-UI-sig.stx line 15"><span class="token sort_Id">TemplateElement</span></a></span></span>
    <span class="cons_OpDecl"><span id="DispatchEntry_29_5" title="Not referenced"><span class="token sort_Id">DispatchEntry</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="../WebDSL-Lexical-sig.stx/#Id_14_5" id="Id_29_21" title="Defined at ../WebDSL-Lexical-sig.stx line 14"><span class="token sort_Id">Id</span></a></span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="../WebDSL-Core-sig.stx/#OptFormalArgs_12_5" id="OptFormalArgs_29_26" title="Defined at ../WebDSL-Core-sig.stx line 12"><span class="token sort_Id">OptFormalArgs</span></a></span> <span class="operator">*</span> <span class="keyword">list</span><span class="operator">(</span><span class="cons_SimpleSort"><a href="../WebDSL-UI-sig.stx/#TemplateElement_15_5" id="TemplateElement_29_47" title="Defined at ../WebDSL-UI-sig.stx line 15"><span class="token sort_Id">TemplateElement</span></a></span><span class="operator">)</span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#DispatchEntry_12_5" id="DispatchEntry_29_67" title="Defined at line 12"><span class="token sort_Id">DispatchEntry</span></a></span></span>
    <span class="cons_OpDecl"><span id="DispatchEntity_30_5" title="Not referenced"><span class="token sort_Id">DispatchEntity</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="../WebDSL-Lexical-sig.stx/#Id_14_5" id="Id_30_22" title="Defined at ../WebDSL-Lexical-sig.stx line 14"><span class="token sort_Id">Id</span></a></span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="../WebDSL-Core-sig.stx/#Sort_17_5" id="Sort_30_27" title="Defined at ../WebDSL-Core-sig.stx line 17"><span class="token sort_Id">Sort</span></a></span> <span class="operator">*</span> <span class="keyword">list</span><span class="operator">(</span><span class="cons_SimpleSort"><a href="../WebDSL-UI-sig.stx/#TemplateElement_15_5" id="TemplateElement_30_39" title="Defined at ../WebDSL-UI-sig.stx line 15"><span class="token sort_Id">TemplateElement</span></a></span><span class="operator">)</span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#DispatchEntry_12_5" id="DispatchEntry_30_59" title="Defined at line 12"><span class="token sort_Id">DispatchEntry</span></a></span></span>
    <span class="cons_OpDecl"><span id="DispatchDefault_31_5" title="Not referenced"><span class="token sort_Id">DispatchDefault</span></span> <span class="operator">:</span> <span class="keyword">list</span><span class="operator">(</span><span class="cons_SimpleSort"><a href="../WebDSL-UI-sig.stx/#TemplateElement_15_5" id="TemplateElement_31_28" title="Defined at ../WebDSL-UI-sig.stx line 15"><span class="token sort_Id">TemplateElement</span></a></span><span class="operator">)</span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#DispatchDefault_13_5" id="DispatchDefault_31_48" title="Defined at line 13"><span class="token sort_Id">DispatchDefault</span></a></span></span>
    <span class="cons_OpDecl"><span id="DispatchDefaultNone_32_5" title="Not referenced"><span class="token sort_Id">DispatchDefaultNone</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#DispatchDefault_13_5" id="DispatchDefault_32_27" title="Defined at line 13"><span class="token sort_Id">DispatchDefault</span></a></span></span>
    <span class="cons_OpDecl"><span id="DispatchNavigate2TemplateElement_33_5" title="Not referenced"><span class="token sort_Id">DispatchNavigate2TemplateElement</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#DispatchNavigate_15_5" id="DispatchNavigate_33_40" title="Defined at line 15"><span class="token sort_Id">DispatchNavigate</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="../WebDSL-UI-sig.stx/#TemplateElement_15_5" id="TemplateElement_33_60" title="Defined at ../WebDSL-UI-sig.stx line 15"><span class="token sort_Id">TemplateElement</span></a></span></span>
    <span class="cons_OpDecl"><span id="DispatchNavigateButton2TemplateElement_34_5" title="Not referenced"><span class="token sort_Id">DispatchNavigateButton2TemplateElement</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#DispatchNavigateButton_16_5" id="DispatchNavigateButton_34_46" title="Defined at line 16"><span class="token sort_Id">DispatchNavigateButton</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="../WebDSL-UI-sig.stx/#TemplateElement_15_5" id="TemplateElement_34_72" title="Defined at ../WebDSL-UI-sig.stx line 15"><span class="token sort_Id">TemplateElement</span></a></span></span>
    <span class="cons_OpDecl"><span id="DispatchNavigate_35_5" title="Not referenced"><span class="token sort_Id">DispatchNavigate</span></span> <span class="operator">:</span> <span class="keyword">list</span><span class="operator">(</span><span class="cons_SimpleSort"><a href="#DispatchNavigateCall_14_5" id="DispatchNavigateCall_35_29" title="Defined at line 14"><span class="token sort_Id">DispatchNavigateCall</span></a></span><span class="operator">)</span> <span class="operator">*</span> <span class="keyword">list</span><span class="operator">(</span><span class="cons_SimpleSort"><a href="../WebDSL-UI-sig.stx/#TemplateElement_15_5" id="TemplateElement_35_58" title="Defined at ../WebDSL-UI-sig.stx line 15"><span class="token sort_Id">TemplateElement</span></a></span><span class="operator">)</span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#DispatchNavigate_15_5" id="DispatchNavigate_35_78" title="Defined at line 15"><span class="token sort_Id">DispatchNavigate</span></a></span></span>
    <span class="cons_OpDecl"><span id="DispatchNavigateButton_36_5" title="Not referenced"><span class="token sort_Id">DispatchNavigateButton</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="../WebDSL-Action-sig.stx/#Exp_25_5" id="Exp_36_30" title="Defined at ../WebDSL-Action-sig.stx line 25"><span class="token sort_Id">Exp</span></a></span> <span class="operator">*</span> <span class="keyword">list</span><span class="operator">(</span><span class="cons_SimpleSort"><a href="#DispatchNavigateCall_14_5" id="DispatchNavigateCall_36_41" title="Defined at line 14"><span class="token sort_Id">DispatchNavigateCall</span></a></span><span class="operator">)</span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#DispatchNavigateButton_16_5" id="DispatchNavigateButton_36_66" title="Defined at line 16"><span class="token sort_Id">DispatchNavigateButton</span></a></span></span>
    <span class="cons_OpDecl"><span id="DispatchNavigateCall_37_5" title="Not referenced"><span class="token sort_Id">DispatchNavigateCall</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="../WebDSL-Lexical-sig.stx/#Id_14_5" id="Id_37_28" title="Defined at ../WebDSL-Lexical-sig.stx line 14"><span class="token sort_Id">Id</span></a></span> <span class="operator">*</span> <span class="keyword">list</span><span class="operator">(</span><span class="cons_SimpleSort"><a href="../WebDSL-Action-sig.stx/#Exp_25_5" id="Exp_37_38" title="Defined at ../WebDSL-Action-sig.stx line 25"><span class="token sort_Id">Exp</span></a></span><span class="operator">)</span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#DispatchNavigateCall_14_5" id="DispatchNavigateCall_37_46" title="Defined at line 14"><span class="token sort_Id">DispatchNavigateCall</span></a></span></span>
    <span class="cons_OpDecl"><span id="DispatchNavigateCallNoArg_38_5" title="Not referenced"><span class="token sort_Id">DispatchNavigateCallNoArg</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="../WebDSL-Lexical-sig.stx/#Id_14_5" id="Id_38_33" title="Defined at ../WebDSL-Lexical-sig.stx line 14"><span class="token sort_Id">Id</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#DispatchNavigateCall_14_5" id="DispatchNavigateCall_38_39" title="Defined at line 14"><span class="token sort_Id">DispatchNavigateCall</span></a></span></span>
</code></pre></td></tr></tbody></table></div>

<div id="modal">
  <div id="modal-content">
    <span id="modal-close">&times;</span>
    <h2 id="modal-h2"></h2>
    <p  id="modal-p"></p>
    <ul id="modal-ul"></ul>
  </div>
</div>
