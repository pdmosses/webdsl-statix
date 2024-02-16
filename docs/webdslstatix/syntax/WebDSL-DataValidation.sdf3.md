---
title: WebDSL-DataValidation.sdf3
hide:
  - toc
---

# `WebDSL-DataValidation.sdf3`

:simple-github: [pdmosses/webdsl-statix/webdslstatix/syntax/WebDSL-DataValidation.sdf3]

[pdmosses/webdsl-statix/webdslstatix/syntax/WebDSL-DataValidation.sdf3]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/syntax/WebDSL-DataValidation.sdf3 "The source file on GitHub"

<div class="sdf3"><table class="highlighttable"><tbody><tr><td class="linenos"><div class="linenodiv"><pre><span></span>1
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
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl-statix.sdf3/#WebDSL-DataValidation_10_3" id="WebDSL-DataValidation_1_8" title="a definition with a single reference">WebDSL-DataValidation</a>

<span class="keyword">imports</span>
  <a href="../WebDSL-Action.sdf3/#WebDSL-Action_1_8" id="WebDSL-Action_4_3" title="a reference to a single-file definition">WebDSL-Action</a>
  <a href="../WebDSL-Lexical.sdf3/#WebDSL-Lexical_1_8" id="WebDSL-Lexical_5_3" title="a reference to a single-file definition">WebDSL-Lexical</a>
  <a href="../WebDSL-UI.sdf3/#WebDSL-UI_1_8" id="WebDSL-UI_6_3" title="a reference to a single-file definition">WebDSL-UI</a>
  <a href="../WebDSL-DataModel.sdf3/#WebDSL-DataModel_1_8" id="WebDSL-DataModel_7_3" title="a reference to a single-file definition">WebDSL-DataModel</a>
  <a href="../WebDSL-Core.sdf3/#WebDSL-Core_1_8" id="WebDSL-Core_8_3" title="a reference to a single-file definition">WebDSL-Core</a>

<span class="keyword">context-free syntax</span>

  <span id="Annotation_12_3" title="a definition with no references">Annotation</span>.<span class="cons_Constructor"><span id="ValidateCreateAnno_12_14" title="a definition with no references">ValidateCreateAnno</span></span> = &lt;<span class="cons_String">validatecreate</span> <span class="cons_String">(</span> &lt;<a href="../WebDSL-UI.sdf3/#Exp_469_3" id="Exp_12_54" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">,</span> &lt;<a href="../WebDSL-UI.sdf3/#Exp_469_3" id="Exp_12_62" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">)</span>&gt;
  <span id="Annotation_13_3" title="a definition with no references">Annotation</span>.<span class="cons_Constructor"><span id="ValidateUpdateAnno_13_14" title="a definition with no references">ValidateUpdateAnno</span></span> = &lt;<span class="cons_String">validateupdate</span> <span class="cons_String">(</span> &lt;<a href="../WebDSL-UI.sdf3/#Exp_469_3" id="Exp_13_54" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">,</span> &lt;<a href="../WebDSL-UI.sdf3/#Exp_469_3" id="Exp_13_62" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">)</span>&gt;
  <span id="Annotation_14_3" title="a definition with no references">Annotation</span>.<span class="cons_Constructor"><span id="ValidateDeleteAnno_14_14" title="a definition with no references">ValidateDeleteAnno</span></span> = &lt;<span class="cons_String">validatedelete</span> <span class="cons_String">(</span> &lt;<a href="../WebDSL-UI.sdf3/#Exp_469_3" id="Exp_14_54" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">,</span> &lt;<a href="../WebDSL-UI.sdf3/#Exp_469_3" id="Exp_14_62" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">)</span>&gt;
  <span id="Annotation_15_3" title="a definition with no references">Annotation</span>.<span class="cons_Constructor"><span id="ValidateAnno_15_14" title="a definition with no references">ValidateAnno</span></span> = &lt;<span class="cons_String">validate</span> <span class="cons_String">(</span> &lt;<a href="../WebDSL-UI.sdf3/#Exp_469_3" id="Exp_15_42" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">,</span> &lt;<a href="../WebDSL-UI.sdf3/#Exp_469_3" id="Exp_15_50" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">)</span>&gt;
  <span id="Annotation_16_3" title="a definition with no references">Annotation</span>.<span class="cons_Constructor"><span id="NamedValidateAnno_16_14" title="a definition with no references">NamedValidateAnno</span></span> = &lt;&lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_16_36" title="a reference to a single-file definition">Id</a>&gt; <span class="cons_String">:</span> <span class="cons_String">validate</span> <span class="cons_String">(</span> &lt;<a href="../WebDSL-UI.sdf3/#Exp_469_3" id="Exp_16_54" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">,</span> &lt;<a href="../WebDSL-UI.sdf3/#Exp_469_3" id="Exp_16_62" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">)</span>&gt;

  <span id="EntityBodyDeclaration_18_3" title="a definition with no references">EntityBodyDeclaration</span>.<span class="cons_Constructor"><span id="ValidateEntity_18_25" title="a definition with no references">ValidateEntity</span></span> = &lt;
    <span class="cons_String">validate</span> <span class="cons_String">(</span> &lt;<a href="../WebDSL-UI.sdf3/#Exp_469_3" id="Exp_19_17" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">,</span> &lt;<a href="../WebDSL-UI.sdf3/#Exp_469_3" id="Exp_19_25" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">)</span>
  &gt;

  <span id="Statement_22_3" title="a definition with no references">Statement</span>.<span class="cons_Constructor"><span id="ValidateStatement_22_13" title="a definition with no references">ValidateStatement</span></span> = &lt;
    <span class="cons_String">validate</span> <span class="cons_String">(</span> &lt;<a href="../WebDSL-UI.sdf3/#Exp_469_3" id="Exp_23_17" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">,</span> &lt;<a href="../WebDSL-UI.sdf3/#Exp_469_3" id="Exp_23_25" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">)</span> <span class="cons_String">;</span>
  &gt;

  <span id="Statement_26_3" title="a definition with no references">Statement</span>.<span class="cons_Constructor"><span id="NamedValidateStatement_26_13" title="a definition with no references">NamedValidateStatement</span></span> = &lt;
    &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_27_6" title="a reference to a single-file definition">Id</a>&gt; <span class="cons_String">:</span> <span class="cons_String">validate</span> <span class="cons_String">(</span> &lt;<a href="../WebDSL-UI.sdf3/#Exp_469_3" id="Exp_27_24" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">,</span> &lt;<a href="../WebDSL-UI.sdf3/#Exp_469_3" id="Exp_27_32" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">)</span> <span class="cons_String">;</span>
  &gt;

  <span id="ThisCall_30_3" title="a definition with no references">ThisCall</span> = &lt;<span class="cons_String">validate</span> <span class="cons_String">(</span> &lt;<a href="../WebDSL-UI.sdf3/#Exp_469_3" id="Exp_30_27" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">,</span> &lt;<a href="../WebDSL-UI.sdf3/#Exp_469_3" id="Exp_30_35" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">)</span>&gt; {<span class="keyword">reject</span>}

  <span id="TemplateCall_32_3" title="a definition with no references">TemplateCall</span>.<span class="cons_Constructor"><span id="ValidationErrors_32_16" title="a definition with no references">ValidationErrors</span></span> = &lt;<span class="cons_String">validationErrors</span> <span class="cons_String">(</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_32_56" title="a reference to a single-file definition">Id</a>&gt; <span class="cons_String">)</span>&gt;
  <span id="TemplateCall_33_3" title="a definition with no references">TemplateCall</span>.<span class="cons_Constructor"><span id="ValidationErrorsEmpty_33_16" title="a definition with no references">ValidationErrorsEmpty</span></span> = &lt;<span class="cons_String">validationErrors</span> <span class="cons_String">(</span> <span class="cons_String">)</span>&gt;

<span class="keyword">lexical syntax</span>

  <span id="TemplateId_37_3" title="a definition with no references">TemplateId</span> = <span class="cons_Lit">"validationErrors"</span> {<span class="keyword">reject</span>}

</code></pre></td></tr></tbody></table></div>

<div id="modal">
  <div id="modal-content">
    <span id="modal-close">&times;</span>
    <h2 id="modal-h2"></h2>
    <p  id="modal-p"></p>
    <ul id="modal-ul"></ul>
  </div>
</div>
