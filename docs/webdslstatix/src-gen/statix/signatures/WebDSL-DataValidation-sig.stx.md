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
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl-statix-sig.stx#signatures/WebDSL-DataValidation-sig_243_279" id="signatures/WebDSL-DataValidation-sig_7_43" title="Referenced at ../webdsl-statix-sig.stx line 10">signatures/WebDSL-DataValidation-sig</a>

<span class="keyword">imports</span>
  <a href="../WebDSL-Action-sig.stx#signatures/WebDSL-Action-sig_7_35" id="signatures/WebDSL-Action-sig_55_83" title="Defined at ../WebDSL-Action-sig.stx line 1">signatures/WebDSL-Action-sig</a>
  <a href="../WebDSL-Lexical-sig.stx#signatures/WebDSL-Lexical-sig_7_36" id="signatures/WebDSL-Lexical-sig_86_115" title="Defined at ../WebDSL-Lexical-sig.stx line 1">signatures/WebDSL-Lexical-sig</a>
  <a href="../WebDSL-UI-sig.stx#signatures/WebDSL-UI-sig_7_31" id="signatures/WebDSL-UI-sig_118_142" title="Defined at ../WebDSL-UI-sig.stx line 1">signatures/WebDSL-UI-sig</a>
  <a href="../WebDSL-DataModel-sig.stx#signatures/WebDSL-DataModel-sig_7_38" id="signatures/WebDSL-DataModel-sig_145_176" title="Defined at ../WebDSL-DataModel-sig.stx line 1">signatures/WebDSL-DataModel-sig</a>
  <a href="../WebDSL-Core-sig.stx#signatures/WebDSL-Core-sig_7_33" id="signatures/WebDSL-Core-sig_179_205" title="Defined at ../WebDSL-Core-sig.stx line 1">signatures/WebDSL-Core-sig</a>

<span class="keyword">signature</span>

  <span class="keyword">sorts</span>

  <span class="keyword">constructors</span>

<span class="keyword">signature</span>

  <span class="keyword">constructors</span>
    <a href="../../../../trans/static-semantics/entities/annotations.stx#ValidateCreateAnno_8461_8479" id="ValidateCreateAnno_273_291" title="Referenced at ../../../../trans/static-semantics/entities/annotations.stx line 188">ValidateCreateAnno</a> : <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_294_297" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> * <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_300_303" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> -&gt; <a href="../WebDSL-DataModel-sig.stx#Annotation_220_230" id="Annotation_307_317" title="Defined at ../WebDSL-DataModel-sig.stx line 14">Annotation</a>
    <a href="../../../../trans/static-semantics/entities/annotations.stx#ValidateUpdateAnno_8573_8591" id="ValidateUpdateAnno_322_340" title="Referenced at ../../../../trans/static-semantics/entities/annotations.stx line 189">ValidateUpdateAnno</a> : <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_343_346" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> * <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_349_352" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> -&gt; <a href="../WebDSL-DataModel-sig.stx#Annotation_220_230" id="Annotation_356_366" title="Defined at ../WebDSL-DataModel-sig.stx line 14">Annotation</a>
    <a href="../../../../trans/static-semantics/entities/annotations.stx#ValidateDeleteAnno_8685_8703" id="ValidateDeleteAnno_371_389" title="Referenced at ../../../../trans/static-semantics/entities/annotations.stx line 190">ValidateDeleteAnno</a> : <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_392_395" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> * <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_398_401" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> -&gt; <a href="../WebDSL-DataModel-sig.stx#Annotation_220_230" id="Annotation_405_415" title="Defined at ../WebDSL-DataModel-sig.stx line 14">Annotation</a>
    <a href="../../../../trans/static-semantics/entities/annotations.stx#ValidateAnno_8797_8809" id="ValidateAnno_420_432" title="Referenced at ../../../../trans/static-semantics/entities/annotations.stx line 191">ValidateAnno</a> : <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_435_438" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> * <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_441_444" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> -&gt; <a href="../WebDSL-DataModel-sig.stx#Annotation_220_230" id="Annotation_448_458" title="Defined at ../WebDSL-DataModel-sig.stx line 14">Annotation</a>
    <a href="../../../../trans/static-semantics/entities/annotations.stx#NamedValidateAnno_8903_8920" id="NamedValidateAnno_463_480" title="Referenced at ../../../../trans/static-semantics/entities/annotations.stx line 192">NamedValidateAnno</a> : <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_483_485" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> * <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_488_491" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> * <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_494_497" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> -&gt; <a href="../WebDSL-DataModel-sig.stx#Annotation_220_230" id="Annotation_501_511" title="Defined at ../WebDSL-DataModel-sig.stx line 14">Annotation</a>
    <a href="../../../../trans/static-semantics/webdsl-entities.stx#ValidateEntity_7794_7808" id="ValidateEntity_516_530" title="Referenced at ../../../../trans/static-semantics/webdsl-entities.stx line 173">ValidateEntity</a> : <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_533_536" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> * <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_539_542" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> -&gt; <a href="../WebDSL-DataModel-sig.stx#EntityBodyDeclaration_164_185" id="EntityBodyDeclaration_546_567" title="Defined at ../WebDSL-DataModel-sig.stx line 11">EntityBodyDeclaration</a>
    <a href="../../../../trans/static-semantics/webdsl-actions.stx#ValidateStatement_14538_14555" id="ValidateStatement_572_589" title="Referenced at ../../../../trans/static-semantics/webdsl-actions.stx line 351">ValidateStatement</a> : <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_592_595" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> * <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_598_601" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> -&gt; <a href="../WebDSL-Core-sig.stx#Statement_350_359" id="Statement_605_614" title="Defined at ../WebDSL-Core-sig.stx line 23">Statement</a>
    <a href="../../../../trans/static-semantics/webdsl-actions.stx#NamedValidateStatement_14643_14665" id="NamedValidateStatement_619_641" title="Referenced at ../../../../trans/static-semantics/webdsl-actions.stx line 352">NamedValidateStatement</a> : <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_644_646" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> * <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_649_652" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> * <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_655_658" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> -&gt; <a href="../WebDSL-Core-sig.stx#Statement_350_359" id="Statement_662_671" title="Defined at ../WebDSL-Core-sig.stx line 23">Statement</a>
    <a href="../../../../trans/static-semantics/ui/template-calls.stx#ValidationErrors_2737_2753" id="ValidationErrors_676_692" title="Referenced at ../../../../trans/static-semantics/ui/template-calls.stx line 62">ValidationErrors</a> : <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_695_697" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> -&gt; <a href="../WebDSL-UI-sig.stx#TemplateCall_303_315" id="TemplateCall_701_713" title="Defined at ../WebDSL-UI-sig.stx line 18">TemplateCall</a>
    <a href="../../../../trans/static-semantics/ui/template-calls.stx#ValidationErrorsEmpty_2782_2803" id="ValidationErrorsEmpty_718_739" title="Referenced at ../../../../trans/static-semantics/ui/template-calls.stx line 63">ValidationErrorsEmpty</a> : <a href="../WebDSL-UI-sig.stx#TemplateCall_303_315" id="TemplateCall_742_754" title="Defined at ../WebDSL-UI-sig.stx line 18">TemplateCall</a>
</code></pre></td></tr></tbody></table></div>