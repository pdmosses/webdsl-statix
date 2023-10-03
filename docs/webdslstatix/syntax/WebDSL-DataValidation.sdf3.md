---
title: WebDSL-DataValidation.sdf3
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
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl-statix.sdf3#WebDSL-DataValidation_138_159" id="WebDSL-DataValidation_7_28" title="Referenced at ../webdsl-statix.sdf3 line 10">WebDSL-DataValidation</a>

<span class="keyword">imports</span>
  <a href="../WebDSL-Action.sdf3#WebDSL-Action_7_20" id="WebDSL-Action_40_53" title="Defined at ../WebDSL-Action.sdf3 line 1">WebDSL-Action</a>
  <a href="../WebDSL-Lexical.sdf3#WebDSL-Lexical_7_21" id="WebDSL-Lexical_56_70" title="Defined at ../WebDSL-Lexical.sdf3 line 1">WebDSL-Lexical</a>
  <a href="../WebDSL-UI.sdf3#WebDSL-UI_7_16" id="WebDSL-UI_73_82" title="Defined at ../WebDSL-UI.sdf3 line 1">WebDSL-UI</a>
  <a href="../WebDSL-DataModel.sdf3#WebDSL-DataModel_7_23" id="WebDSL-DataModel_85_101" title="Defined at ../WebDSL-DataModel.sdf3 line 1">WebDSL-DataModel</a>
  <a href="../WebDSL-Core.sdf3#WebDSL-Core_7_18" id="WebDSL-Core_104_115" title="Defined at ../WebDSL-Core.sdf3 line 1">WebDSL-Core</a>

<span class="keyword">context-free syntax</span>

  <span id="Annotation_140_150" title="Not referenced locally, nor via imports">Annotation</span>.<span class="cons_Constructor"><span id="ValidateCreateAnno_151_169" title="Not referenced locally, nor via imports">ValidateCreateAnno</span></span> = &lt;<span class="cons_String">validatecreate</span> <span class="cons_String">(</span> &lt;<a href="../WebDSL-UI.sdf3#Exp_13248_13251" id="Exp_191_194" title="Defined at ../WebDSL-UI.sdf3 line 469, 517">Exp</a>&gt; <span class="cons_String">,</span> &lt;<a href="../WebDSL-UI.sdf3#Exp_13248_13251" id="Exp_199_202" title="Defined at ../WebDSL-UI.sdf3 line 469, 517">Exp</a>&gt; <span class="cons_String">)</span>&gt;
  <span id="Annotation_209_219" title="Not referenced locally, nor via imports">Annotation</span>.<span class="cons_Constructor"><span id="ValidateUpdateAnno_220_238" title="Not referenced locally, nor via imports">ValidateUpdateAnno</span></span> = &lt;<span class="cons_String">validateupdate</span> <span class="cons_String">(</span> &lt;<a href="../WebDSL-UI.sdf3#Exp_13248_13251" id="Exp_260_263" title="Defined at ../WebDSL-UI.sdf3 line 469, 517">Exp</a>&gt; <span class="cons_String">,</span> &lt;<a href="../WebDSL-UI.sdf3#Exp_13248_13251" id="Exp_268_271" title="Defined at ../WebDSL-UI.sdf3 line 469, 517">Exp</a>&gt; <span class="cons_String">)</span>&gt;
  <span id="Annotation_278_288" title="Not referenced locally, nor via imports">Annotation</span>.<span class="cons_Constructor"><span id="ValidateDeleteAnno_289_307" title="Not referenced locally, nor via imports">ValidateDeleteAnno</span></span> = &lt;<span class="cons_String">validatedelete</span> <span class="cons_String">(</span> &lt;<a href="../WebDSL-UI.sdf3#Exp_13248_13251" id="Exp_329_332" title="Defined at ../WebDSL-UI.sdf3 line 469, 517">Exp</a>&gt; <span class="cons_String">,</span> &lt;<a href="../WebDSL-UI.sdf3#Exp_13248_13251" id="Exp_337_340" title="Defined at ../WebDSL-UI.sdf3 line 469, 517">Exp</a>&gt; <span class="cons_String">)</span>&gt;
  <span id="Annotation_347_357" title="Not referenced locally, nor via imports">Annotation</span>.<span class="cons_Constructor"><span id="ValidateAnno_358_370" title="Not referenced locally, nor via imports">ValidateAnno</span></span> = &lt;<span class="cons_String">validate</span> <span class="cons_String">(</span> &lt;<a href="../WebDSL-UI.sdf3#Exp_13248_13251" id="Exp_386_389" title="Defined at ../WebDSL-UI.sdf3 line 469, 517">Exp</a>&gt; <span class="cons_String">,</span> &lt;<a href="../WebDSL-UI.sdf3#Exp_13248_13251" id="Exp_394_397" title="Defined at ../WebDSL-UI.sdf3 line 469, 517">Exp</a>&gt; <span class="cons_String">)</span>&gt;
  <span id="Annotation_404_414" title="Not referenced locally, nor via imports">Annotation</span>.<span class="cons_Constructor"><span id="NamedValidateAnno_415_432" title="Not referenced locally, nor via imports">NamedValidateAnno</span></span> = &lt;&lt;<a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_437_439" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; <span class="cons_String">:</span> <span class="cons_String">validate</span> <span class="cons_String">(</span> &lt;<a href="../WebDSL-UI.sdf3#Exp_13248_13251" id="Exp_455_458" title="Defined at ../WebDSL-UI.sdf3 line 469, 517">Exp</a>&gt; <span class="cons_String">,</span> &lt;<a href="../WebDSL-UI.sdf3#Exp_13248_13251" id="Exp_463_466" title="Defined at ../WebDSL-UI.sdf3 line 469, 517">Exp</a>&gt; <span class="cons_String">)</span>&gt;

  <span id="EntityBodyDeclaration_474_495" title="Not referenced locally, nor via imports">EntityBodyDeclaration</span>.<span class="cons_Constructor"><span id="ValidateEntity_496_510" title="Not referenced locally, nor via imports">ValidateEntity</span></span> = &lt;
    <span class="cons_String">validate</span> <span class="cons_String">(</span> &lt;<a href="../WebDSL-UI.sdf3#Exp_13248_13251" id="Exp_531_534" title="Defined at ../WebDSL-UI.sdf3 line 469, 517">Exp</a>&gt; <span class="cons_String">,</span> &lt;<a href="../WebDSL-UI.sdf3#Exp_13248_13251" id="Exp_539_542" title="Defined at ../WebDSL-UI.sdf3 line 469, 517">Exp</a>&gt; <span class="cons_String">)</span>
  &gt;

  <span id="Statement_553_562" title="Not referenced locally, nor via imports">Statement</span>.<span class="cons_Constructor"><span id="ValidateStatement_563_580" title="Not referenced locally, nor via imports">ValidateStatement</span></span> = &lt;
    <span class="cons_String">validate</span> <span class="cons_String">(</span> &lt;<a href="../WebDSL-UI.sdf3#Exp_13248_13251" id="Exp_601_604" title="Defined at ../WebDSL-UI.sdf3 line 469, 517">Exp</a>&gt; <span class="cons_String">,</span> &lt;<a href="../WebDSL-UI.sdf3#Exp_13248_13251" id="Exp_609_612" title="Defined at ../WebDSL-UI.sdf3 line 469, 517">Exp</a>&gt; <span class="cons_String">)</span> <span class="cons_String">;</span>
  &gt;

  <span id="Statement_625_634" title="Not referenced locally, nor via imports">Statement</span>.<span class="cons_Constructor"><span id="NamedValidateStatement_635_657" title="Not referenced locally, nor via imports">NamedValidateStatement</span></span> = &lt;
    &lt;<a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_667_669" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; <span class="cons_String">:</span> <span class="cons_String">validate</span> <span class="cons_String">(</span> &lt;<a href="../WebDSL-UI.sdf3#Exp_13248_13251" id="Exp_685_688" title="Defined at ../WebDSL-UI.sdf3 line 469, 517">Exp</a>&gt; <span class="cons_String">,</span> &lt;<a href="../WebDSL-UI.sdf3#Exp_13248_13251" id="Exp_693_696" title="Defined at ../WebDSL-UI.sdf3 line 469, 517">Exp</a>&gt; <span class="cons_String">)</span> <span class="cons_String">;</span>
  &gt;

  <span id="ThisCall_709_717" title="Not referenced locally, nor via imports">ThisCall</span> = &lt;<span class="cons_String">validate</span> <span class="cons_String">(</span> &lt;<a href="../WebDSL-UI.sdf3#Exp_13248_13251" id="Exp_733_736" title="Defined at ../WebDSL-UI.sdf3 line 469, 517">Exp</a>&gt; <span class="cons_String">,</span> &lt;<a href="../WebDSL-UI.sdf3#Exp_13248_13251" id="Exp_741_744" title="Defined at ../WebDSL-UI.sdf3 line 469, 517">Exp</a>&gt; <span class="cons_String">)</span>&gt; {<span class="keyword">reject</span>}

  <span id="TemplateCall_761_773" title="Not referenced locally, nor via imports">TemplateCall</span>.<span class="cons_Constructor"><span id="ValidationErrors_774_790" title="Not referenced locally, nor via imports">ValidationErrors</span></span> = &lt;<span class="cons_String">validationErrors</span> <span class="cons_String">(</span> &lt;<a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_814_816" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; <span class="cons_String">)</span>&gt;
  <span id="TemplateCall_823_835" title="Not referenced locally, nor via imports">TemplateCall</span>.<span class="cons_Constructor"><span id="ValidationErrorsEmpty_836_857" title="Not referenced locally, nor via imports">ValidationErrorsEmpty</span></span> = &lt;<span class="cons_String">validationErrors</span> <span class="cons_String">(</span> <span class="cons_String">)</span>&gt;

<span class="keyword">lexical syntax</span>

  <span id="TemplateId_902_912" title="Not referenced locally, nor via imports">TemplateId</span> = <span class="cons_Lit">"validationErrors"</span> {<span class="keyword">reject</span>}

</code></pre></td></tr></tbody></table></div>