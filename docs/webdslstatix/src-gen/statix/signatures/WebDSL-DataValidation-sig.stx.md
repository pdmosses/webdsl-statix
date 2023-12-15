---
title: WebDSL-DataValidation-sig.stx
hide:
  - toc
---

# `WebDSL-DataValidation-sig.stx`



[pdmosses/webdsl-statix/webdslstatix/src-gen/statix/signatures/WebDSL-DataValidation-sig.stx]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/src-gen/statix/signatures/WebDSL-DataValidation-sig.stx "The source file on GitHub"

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
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl-statix-sig.stx/#signatures/WebDSL-DataValidation-sig_10_3" id="signatures/WebDSL-DataValidation-sig_1_8" title="Referenced at ../webdsl-statix-sig.stx line 10"><span class="token sort_Id">signatures/WebDSL-DataValidation-sig</span></a>

<span class="keyword">imports</span>
  <a href="../WebDSL-Action-sig.stx/#signatures/WebDSL-Action-sig_1_8" id="signatures/WebDSL-Action-sig_4_3" title="Defined at ../WebDSL-Action-sig.stx line 1"><span class="token sort_Id">signatures/WebDSL-Action-sig</span></a>
  <a href="../WebDSL-Lexical-sig.stx/#signatures/WebDSL-Lexical-sig_1_8" id="signatures/WebDSL-Lexical-sig_5_3" title="Defined at ../WebDSL-Lexical-sig.stx line 1"><span class="token sort_Id">signatures/WebDSL-Lexical-sig</span></a>
  <a href="../WebDSL-UI-sig.stx/#signatures/WebDSL-UI-sig_1_8" id="signatures/WebDSL-UI-sig_6_3" title="Defined at ../WebDSL-UI-sig.stx line 1"><span class="token sort_Id">signatures/WebDSL-UI-sig</span></a>
  <a href="../WebDSL-DataModel-sig.stx/#signatures/WebDSL-DataModel-sig_1_8" id="signatures/WebDSL-DataModel-sig_7_3" title="Defined at ../WebDSL-DataModel-sig.stx line 1"><span class="token sort_Id">signatures/WebDSL-DataModel-sig</span></a>
  <a href="../WebDSL-Core-sig.stx/#signatures/WebDSL-Core-sig_1_8" id="signatures/WebDSL-Core-sig_8_3" title="Defined at ../WebDSL-Core-sig.stx line 1"><span class="token sort_Id">signatures/WebDSL-Core-sig</span></a>

<span class="keyword">signature</span>

  <span class="keyword">sorts</span>

  <span class="keyword">constructors</span>

<span class="keyword">signature</span>

  <span class="keyword">constructors</span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/entities/annotations.stx/#ValidateCreateAnno_188_25" id="ValidateCreateAnno_19_5" title="Referenced at ../../../../trans/static-semantics/entities/annotations.stx line 188"><span class="token sort_Id">ValidateCreateAnno</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="../WebDSL-Action-sig.stx/#Exp_25_5" id="Exp_19_26" title="Defined at ../WebDSL-Action-sig.stx line 25"><span class="token sort_Id">Exp</span></a></span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="../WebDSL-Action-sig.stx/#Exp_25_5" id="Exp_19_32" title="Defined at ../WebDSL-Action-sig.stx line 25"><span class="token sort_Id">Exp</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="../WebDSL-DataModel-sig.stx/#Annotation_14_5" id="Annotation_19_39" title="Defined at ../WebDSL-DataModel-sig.stx line 14"><span class="token sort_Id">Annotation</span></a></span></span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/entities/annotations.stx/#ValidateUpdateAnno_189_25" id="ValidateUpdateAnno_20_5" title="Referenced at ../../../../trans/static-semantics/entities/annotations.stx line 189"><span class="token sort_Id">ValidateUpdateAnno</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="../WebDSL-Action-sig.stx/#Exp_25_5" id="Exp_20_26" title="Defined at ../WebDSL-Action-sig.stx line 25"><span class="token sort_Id">Exp</span></a></span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="../WebDSL-Action-sig.stx/#Exp_25_5" id="Exp_20_32" title="Defined at ../WebDSL-Action-sig.stx line 25"><span class="token sort_Id">Exp</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="../WebDSL-DataModel-sig.stx/#Annotation_14_5" id="Annotation_20_39" title="Defined at ../WebDSL-DataModel-sig.stx line 14"><span class="token sort_Id">Annotation</span></a></span></span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/entities/annotations.stx/#ValidateDeleteAnno_190_25" id="ValidateDeleteAnno_21_5" title="Referenced at ../../../../trans/static-semantics/entities/annotations.stx line 190"><span class="token sort_Id">ValidateDeleteAnno</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="../WebDSL-Action-sig.stx/#Exp_25_5" id="Exp_21_26" title="Defined at ../WebDSL-Action-sig.stx line 25"><span class="token sort_Id">Exp</span></a></span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="../WebDSL-Action-sig.stx/#Exp_25_5" id="Exp_21_32" title="Defined at ../WebDSL-Action-sig.stx line 25"><span class="token sort_Id">Exp</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="../WebDSL-DataModel-sig.stx/#Annotation_14_5" id="Annotation_21_39" title="Defined at ../WebDSL-DataModel-sig.stx line 14"><span class="token sort_Id">Annotation</span></a></span></span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/entities/annotations.stx/#ValidateAnno_191_25" id="ValidateAnno_22_5" title="Referenced at ../../../../trans/static-semantics/entities/annotations.stx line 191"><span class="token sort_Id">ValidateAnno</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="../WebDSL-Action-sig.stx/#Exp_25_5" id="Exp_22_20" title="Defined at ../WebDSL-Action-sig.stx line 25"><span class="token sort_Id">Exp</span></a></span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="../WebDSL-Action-sig.stx/#Exp_25_5" id="Exp_22_26" title="Defined at ../WebDSL-Action-sig.stx line 25"><span class="token sort_Id">Exp</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="../WebDSL-DataModel-sig.stx/#Annotation_14_5" id="Annotation_22_33" title="Defined at ../WebDSL-DataModel-sig.stx line 14"><span class="token sort_Id">Annotation</span></a></span></span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/entities/annotations.stx/#NamedValidateAnno_192_25" id="NamedValidateAnno_23_5" title="Referenced at ../../../../trans/static-semantics/entities/annotations.stx line 192"><span class="token sort_Id">NamedValidateAnno</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="../WebDSL-Lexical-sig.stx/#Id_14_5" id="Id_23_25" title="Defined at ../WebDSL-Lexical-sig.stx line 14"><span class="token sort_Id">Id</span></a></span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="../WebDSL-Action-sig.stx/#Exp_25_5" id="Exp_23_30" title="Defined at ../WebDSL-Action-sig.stx line 25"><span class="token sort_Id">Exp</span></a></span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="../WebDSL-Action-sig.stx/#Exp_25_5" id="Exp_23_36" title="Defined at ../WebDSL-Action-sig.stx line 25"><span class="token sort_Id">Exp</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="../WebDSL-DataModel-sig.stx/#Annotation_14_5" id="Annotation_23_43" title="Defined at ../WebDSL-DataModel-sig.stx line 14"><span class="token sort_Id">Annotation</span></a></span></span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/webdsl-entities.stx/#ValidateEntity_173_35" id="ValidateEntity_24_5" title="Referenced at ../../../../trans/static-semantics/webdsl-entities.stx line 173"><span class="token sort_Id">ValidateEntity</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="../WebDSL-Action-sig.stx/#Exp_25_5" id="Exp_24_22" title="Defined at ../WebDSL-Action-sig.stx line 25"><span class="token sort_Id">Exp</span></a></span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="../WebDSL-Action-sig.stx/#Exp_25_5" id="Exp_24_28" title="Defined at ../WebDSL-Action-sig.stx line 25"><span class="token sort_Id">Exp</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="../WebDSL-DataModel-sig.stx/#EntityBodyDeclaration_11_5" id="EntityBodyDeclaration_24_35" title="Defined at ../WebDSL-DataModel-sig.stx line 11"><span class="token sort_Id">EntityBodyDeclaration</span></a></span></span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/webdsl-actions.stx/#ValidateStatement_351_16" id="ValidateStatement_25_5" title="Referenced at ../../../../trans/static-semantics/webdsl-actions.stx line 351"><span class="token sort_Id">ValidateStatement</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="../WebDSL-Action-sig.stx/#Exp_25_5" id="Exp_25_25" title="Defined at ../WebDSL-Action-sig.stx line 25"><span class="token sort_Id">Exp</span></a></span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="../WebDSL-Action-sig.stx/#Exp_25_5" id="Exp_25_31" title="Defined at ../WebDSL-Action-sig.stx line 25"><span class="token sort_Id">Exp</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="../WebDSL-Core-sig.stx/#Statement_23_5" id="Statement_25_38" title="Defined at ../WebDSL-Core-sig.stx line 23"><span class="token sort_Id">Statement</span></a></span></span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/webdsl-actions.stx/#NamedValidateStatement_352_16" id="NamedValidateStatement_26_5" title="Referenced at ../../../../trans/static-semantics/webdsl-actions.stx line 352"><span class="token sort_Id">NamedValidateStatement</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="../WebDSL-Lexical-sig.stx/#Id_14_5" id="Id_26_30" title="Defined at ../WebDSL-Lexical-sig.stx line 14"><span class="token sort_Id">Id</span></a></span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="../WebDSL-Action-sig.stx/#Exp_25_5" id="Exp_26_35" title="Defined at ../WebDSL-Action-sig.stx line 25"><span class="token sort_Id">Exp</span></a></span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="../WebDSL-Action-sig.stx/#Exp_25_5" id="Exp_26_41" title="Defined at ../WebDSL-Action-sig.stx line 25"><span class="token sort_Id">Exp</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="../WebDSL-Core-sig.stx/#Statement_23_5" id="Statement_26_48" title="Defined at ../WebDSL-Core-sig.stx line 23"><span class="token sort_Id">Statement</span></a></span></span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/ui/template-calls.stx/#ValidationErrors_62_24" id="ValidationErrors_27_5" title="Referenced at ../../../../trans/static-semantics/ui/template-calls.stx line 62"><span class="token sort_Id">ValidationErrors</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="../WebDSL-Lexical-sig.stx/#Id_14_5" id="Id_27_24" title="Defined at ../WebDSL-Lexical-sig.stx line 14"><span class="token sort_Id">Id</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="../WebDSL-UI-sig.stx/#TemplateCall_18_5" id="TemplateCall_27_30" title="Defined at ../WebDSL-UI-sig.stx line 18"><span class="token sort_Id">TemplateCall</span></a></span></span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/ui/template-calls.stx/#ValidationErrorsEmpty_63_24" id="ValidationErrorsEmpty_28_5" title="Referenced at ../../../../trans/static-semantics/ui/template-calls.stx line 63"><span class="token sort_Id">ValidationErrorsEmpty</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="../WebDSL-UI-sig.stx/#TemplateCall_18_5" id="TemplateCall_28_29" title="Defined at ../WebDSL-UI-sig.stx line 18"><span class="token sort_Id">TemplateCall</span></a></span></span>
</code></pre></td></tr></tbody></table></div>

<div id="modal">
  <div id="modal-content">
    <span id="modal-close">&times;</span>
    <h2 id="modal-h2"></h2>
    <p  id="modal-p"></p>
    <ul id="modal-ul"></ul>
  </div>
</div>
