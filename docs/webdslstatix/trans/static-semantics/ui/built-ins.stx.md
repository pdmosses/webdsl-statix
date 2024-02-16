---
title: built-ins.stx
hide:
  - toc
---

# `built-ins.stx`

:simple-github: [pdmosses/webdsl-statix/webdslstatix/trans/static-semantics/ui/built-ins.stx]

[pdmosses/webdsl-statix/webdslstatix/trans/static-semantics/ui/built-ins.stx]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/trans/static-semantics/ui/built-ins.stx "The source file on GitHub"

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
41
42
43
44
45
46
47
48
49
50
51
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <button class="modal-open" id="static-semantics/ui/built-ins_1_8" title="a definition with multiple references" data-urls="../../webdsl-ui.stx/#static-semantics/ui/built-ins line 13_3; ../../webdsl.stx/#static-semantics/ui/built-ins line 9_3"><span class="token sort_Id">static-semantics/ui/built-ins</span></button>

<span class="keyword">imports</span>
  <a href="../../types/built-ins.stx/#static-semantics/types/built-ins_1_8" id="static-semantics/types/built-ins_4_3" title="a reference to a single-file definition"><span class="token sort_Id">static-semantics/types/built-ins</span></a>

  <a href="../template-calls.stx/#static-semantics/ui/template-calls_1_8" id="static-semantics/ui/template-calls_6_3" title="a reference to a single-file definition"><span class="token sort_Id">static-semantics/ui/template-calls</span></a>

  <a href="../../webdsl.stx/#static-semantics/webdsl_1_8" id="static-semantics/webdsl_8_3" title="a reference to a single-file definition"><span class="token sort_Id">static-semantics/webdsl</span></a>
  <a href="../../webdsl-ui.stx/#static-semantics/webdsl-ui_1_8" id="static-semantics/webdsl-ui_9_3" title="a reference to a single-file definition"><span class="token sort_Id">static-semantics/webdsl-ui</span></a>

<span class="keyword">rules</span>

  <button class="modal-open" id="declareUIBuiltIns_13_3" title="a definition with multiple references" data-urls="#declareUIBuiltIns line 14_3; ../../webdsl.stx/#declareUIBuiltIns line 383_5"><span class="token sort_Id">declareUIBuiltIns</span></button> <span class="operator">:</span> <span class="cons_ScopeSort"><span class="keyword">scope</span></span>
  <a href="#declareUIBuiltIns_13_3" id="declareUIBuiltIns_14_3" title="a reference to a single-file definition"><span class="token sort_Id">declareUIBuiltIns</span></a><span class="operator">(</span><span class="cons_Var"><button class="modal-open" id="s_14_21" title="a definition with multiple references" data-urls="#s line 15_21, 16_21, 16_40, 17_21, 17_38, 18_21, 19_21, 21_21, 22_21, 23_21, 24_21, 24_41, 25_21, 25_42, 33_21, 33_47, 33_58, 35_21, 35_46, 36_21, 36_46, 36_57, 37_21, 37_45, 38_21, 38_49, 39_21, 39_47, 41_21, 41_51, 43_17, 43_35"><span class="token sort_Id">s</span></button></span><span class="operator">)</span> <span class="operator">:-</span>
    <a href="../../webdsl.stx/#declareTemplate_151_3" id="declareTemplate_15_5" title="a reference to a single-file definition"><span class="token sort_Id">declareTemplate</span></a><span class="operator">(</span><span class="cons_Var"><a href="#s_14_21" id="s_15_21" title="a reference to a single-file definition"><span class="token sort_Id">s</span></a></span><span class="operator">,</span> <span class="cons_Str"><span class="operator">"</span>title<span class="operator">"</span></span><span class="operator">,</span> <span class="operator">[]),</span>
    <a href="../../webdsl.stx/#declareTemplate_151_3" id="declareTemplate_16_5" title="a reference to a single-file definition"><span class="token sort_Id">declareTemplate</span></a><span class="operator">(</span><span class="cons_Var"><a href="#s_14_21" id="s_16_21" title="a reference to a single-file definition"><span class="token sort_Id">s</span></a></span><span class="operator">,</span> <span class="cons_Str"><span class="operator">"</span>text<span class="operator">"</span></span><span class="operator">,</span> <span class="operator">[</span><a href="../../types/built-ins.stx/#object_84_3" id="object_16_33" title="a reference to a single-file definition"><span class="token sort_Id">object</span></a><span class="operator">(</span><span class="cons_Var"><a href="#s_14_21" id="s_16_40" title="a reference to a single-file definition"><span class="token sort_Id">s</span></a></span><span class="operator">)]),</span>
    <a href="../../webdsl.stx/#declareTemplate_151_3" id="declareTemplate_17_5" title="a reference to a single-file definition"><span class="token sort_Id">declareTemplate</span></a><span class="operator">(</span><span class="cons_Var"><a href="#s_14_21" id="s_17_21" title="a reference to a single-file definition"><span class="token sort_Id">s</span></a></span><span class="operator">,</span> <span class="cons_Str"><span class="operator">"</span>image<span class="operator">"</span></span><span class="operator">,</span> <span class="operator">[</span><a href="../../types/built-ins.stx/#url_54_3" id="url_17_34" title="a reference to a single-file definition"><span class="token sort_Id">url</span></a><span class="operator">(</span><span class="cons_Var"><a href="#s_14_21" id="s_17_38" title="a reference to a single-file definition"><span class="token sort_Id">s</span></a></span><span class="operator">)]),</span>
    <a href="../../webdsl.stx/#declareTemplate_151_3" id="declareTemplate_18_5" title="a reference to a single-file definition"><span class="token sort_Id">declareTemplate</span></a><span class="operator">(</span><span class="cons_Var"><a href="#s_14_21" id="s_18_21" title="a reference to a single-file definition"><span class="token sort_Id">s</span></a></span><span class="operator">,</span> <span class="cons_Str"><span class="operator">"</span>header<span class="operator">"</span></span><span class="operator">,</span> <span class="operator">[]),</span>
    <a href="../../webdsl.stx/#declareTemplate_151_3" id="declareTemplate_19_5" title="a reference to a single-file definition"><span class="token sort_Id">declareTemplate</span></a><span class="operator">(</span><span class="cons_Var"><a href="#s_14_21" id="s_19_21" title="a reference to a single-file definition"><span class="token sort_Id">s</span></a></span><span class="operator">,</span> <span class="cons_Str"><span class="operator">"</span>section<span class="operator">"</span></span><span class="operator">,</span> <span class="operator">[]),</span>
<span class="layout">//    declTemplate(s, "url", [url(s)], []), // TO-DO: investigate if url is template or pageplaceholde</span>
    <a href="../../webdsl.stx/#declareTemplate_151_3" id="declareTemplate_21_5" title="a reference to a single-file definition"><span class="token sort_Id">declareTemplate</span></a><span class="operator">(</span><span class="cons_Var"><a href="#s_14_21" id="s_21_21" title="a reference to a single-file definition"><span class="token sort_Id">s</span></a></span><span class="operator">,</span> <span class="cons_Str"><span class="operator">"</span>form<span class="operator">"</span></span><span class="operator">,</span> <span class="operator">[]),</span>
    <a href="../../webdsl.stx/#declareTemplate_151_3" id="declareTemplate_22_5" title="a reference to a single-file definition"><span class="token sort_Id">declareTemplate</span></a><span class="operator">(</span><span class="cons_Var"><a href="#s_14_21" id="s_22_21" title="a reference to a single-file definition"><span class="token sort_Id">s</span></a></span><span class="operator">,</span> <span class="cons_Str"><span class="operator">"</span>dynamicform<span class="operator">"</span></span><span class="operator">,</span> <span class="operator">[]),</span>
    <a href="../../webdsl.stx/#declareTemplate_151_3" id="declareTemplate_23_5" title="a reference to a single-file definition"><span class="token sort_Id">declareTemplate</span></a><span class="operator">(</span><span class="cons_Var"><a href="#s_14_21" id="s_23_21" title="a reference to a single-file definition"><span class="token sort_Id">s</span></a></span><span class="operator">,</span> <span class="cons_Str"><span class="operator">"</span>captcha<span class="operator">"</span></span><span class="operator">,</span> <span class="operator">[]),</span>
    <a href="../../webdsl.stx/#declareTemplate_151_3" id="declareTemplate_24_5" title="a reference to a single-file definition"><span class="token sort_Id">declareTemplate</span></a><span class="operator">(</span><span class="cons_Var"><a href="#s_14_21" id="s_24_21" title="a reference to a single-file definition"><span class="token sort_Id">s</span></a></span><span class="operator">,</span> <span class="cons_Str"><span class="operator">"</span>input<span class="operator">"</span></span><span class="operator">,</span> <span class="operator">[</span><a href="../../types/built-ins.stx/#object_84_3" id="object_24_34" title="a reference to a single-file definition"><span class="token sort_Id">object</span></a><span class="operator">(</span><span class="cons_Var"><a href="#s_14_21" id="s_24_41" title="a reference to a single-file definition"><span class="token sort_Id">s</span></a></span><span class="operator">)]),</span>
    <a href="../../webdsl.stx/#declareTemplate_151_3" id="declareTemplate_25_5" title="a reference to a single-file definition"><span class="token sort_Id">declareTemplate</span></a><span class="operator">(</span><span class="cons_Var"><a href="#s_14_21" id="s_25_21" title="a reference to a single-file definition"><span class="token sort_Id">s</span></a></span><span class="operator">,</span> <span class="cons_Str"><span class="operator">"</span>output<span class="operator">"</span></span><span class="operator">,</span> <span class="operator">[</span><a href="../../types/built-ins.stx/#object_84_3" id="object_25_35" title="a reference to a single-file definition"><span class="token sort_Id">object</span></a><span class="operator">(</span><span class="cons_Var"><a href="#s_14_21" id="s_25_42" title="a reference to a single-file definition"><span class="token sort_Id">s</span></a></span><span class="operator">)]),</span>

<span class="layout">//    declareTemplate(s, "navigate", []),</span>
<span class="layout">//    declareTemplate(s, "navigate", [url(s)]),</span>
<span class="layout">//    declareTemplate(s, "navigate", [PAGE(_)]), // disable PAGE(_) declarations for now since they are producing nabl2.Var in libraries</span>
<span class="layout">//    declareTemplate(s, "navigate", [string(s), url(s)]),</span>
<span class="layout">//    declareTemplate(s, "navigate", [string(s), PAGE(_)]), // disable PAGE(_) declarations for now since they are producing nabl2.Var in libraries</span>
<span class="layout">//    declareTemplate(s, "navigatebutton", [PAGE(_), string(s)]), // disable PAGE(_) declarations for now since they are producing nabl2.Var in libraries</span>
    <a href="../../webdsl.stx/#declareTemplate_151_3" id="declareTemplate_33_5" title="a reference to a single-file definition"><span class="token sort_Id">declareTemplate</span></a><span class="operator">(</span><span class="cons_Var"><a href="#s_14_21" id="s_33_21" title="a reference to a single-file definition"><span class="token sort_Id">s</span></a></span><span class="operator">,</span> <span class="cons_Str"><span class="operator">"</span>navigatebutton<span class="operator">"</span></span><span class="operator">,</span> <span class="operator">[</span><a href="../../types/built-ins.stx/#url_54_3" id="url_33_43" title="a reference to a single-file definition"><span class="token sort_Id">url</span></a><span class="operator">(</span><span class="cons_Var"><a href="#s_14_21" id="s_33_47" title="a reference to a single-file definition"><span class="token sort_Id">s</span></a></span><span class="operator">),</span> <a href="../../types/built-ins.stx/#string_48_3" id="string_33_51" title="a reference to a single-file definition"><span class="keyword">string</span></a><span class="operator">(</span><span class="cons_Var"><a href="#s_14_21" id="s_33_58" title="a reference to a single-file definition"><span class="token sort_Id">s</span></a></span><span class="operator">)]),</span>

    <a href="../../webdsl.stx/#declareTemplate_151_3" id="declareTemplate_35_5" title="a reference to a single-file definition"><span class="token sort_Id">declareTemplate</span></a><span class="operator">(</span><span class="cons_Var"><a href="#s_14_21" id="s_35_21" title="a reference to a single-file definition"><span class="token sort_Id">s</span></a></span><span class="operator">,</span> <span class="cons_Str"><span class="operator">"</span>includeCSS<span class="operator">"</span></span><span class="operator">,</span> <span class="operator">[</span><a href="../../types/built-ins.stx/#string_48_3" id="string_35_39" title="a reference to a single-file definition"><span class="keyword">string</span></a><span class="operator">(</span><span class="cons_Var"><a href="#s_14_21" id="s_35_46" title="a reference to a single-file definition"><span class="token sort_Id">s</span></a></span><span class="operator">)]),</span>
    <a href="../../webdsl.stx/#declareTemplate_151_3" id="declareTemplate_36_5" title="a reference to a single-file definition"><span class="token sort_Id">declareTemplate</span></a><span class="operator">(</span><span class="cons_Var"><a href="#s_14_21" id="s_36_21" title="a reference to a single-file definition"><span class="token sort_Id">s</span></a></span><span class="operator">,</span> <span class="cons_Str"><span class="operator">"</span>includeCSS<span class="operator">"</span></span><span class="operator">,</span> <span class="operator">[</span><a href="../../types/built-ins.stx/#string_48_3" id="string_36_39" title="a reference to a single-file definition"><span class="keyword">string</span></a><span class="operator">(</span><span class="cons_Var"><a href="#s_14_21" id="s_36_46" title="a reference to a single-file definition"><span class="token sort_Id">s</span></a></span><span class="operator">),</span> <a href="../../types/built-ins.stx/#string_48_3" id="string_36_50" title="a reference to a single-file definition"><span class="keyword">string</span></a><span class="operator">(</span><span class="cons_Var"><a href="#s_14_21" id="s_36_57" title="a reference to a single-file definition"><span class="token sort_Id">s</span></a></span><span class="operator">)]),</span>
    <a href="../../webdsl.stx/#declareTemplate_151_3" id="declareTemplate_37_5" title="a reference to a single-file definition"><span class="token sort_Id">declareTemplate</span></a><span class="operator">(</span><span class="cons_Var"><a href="#s_14_21" id="s_37_21" title="a reference to a single-file definition"><span class="token sort_Id">s</span></a></span><span class="operator">,</span> <span class="cons_Str"><span class="operator">"</span>includeJS<span class="operator">"</span></span><span class="operator">,</span> <span class="operator">[</span><a href="../../types/built-ins.stx/#string_48_3" id="string_37_38" title="a reference to a single-file definition"><span class="keyword">string</span></a><span class="operator">(</span><span class="cons_Var"><a href="#s_14_21" id="s_37_45" title="a reference to a single-file definition"><span class="token sort_Id">s</span></a></span><span class="operator">)]),</span>
    <a href="../../webdsl.stx/#declareTemplate_151_3" id="declareTemplate_38_5" title="a reference to a single-file definition"><span class="token sort_Id">declareTemplate</span></a><span class="operator">(</span><span class="cons_Var"><a href="#s_14_21" id="s_38_21" title="a reference to a single-file definition"><span class="token sort_Id">s</span></a></span><span class="operator">,</span> <span class="cons_Str"><span class="operator">"</span>includeJSLast<span class="operator">"</span></span><span class="operator">,</span> <span class="operator">[</span><a href="../../types/built-ins.stx/#string_48_3" id="string_38_42" title="a reference to a single-file definition"><span class="keyword">string</span></a><span class="operator">(</span><span class="cons_Var"><a href="#s_14_21" id="s_38_49" title="a reference to a single-file definition"><span class="token sort_Id">s</span></a></span><span class="operator">)]),</span>
    <a href="../../webdsl.stx/#declareTemplate_151_3" id="declareTemplate_39_5" title="a reference to a single-file definition"><span class="token sort_Id">declareTemplate</span></a><span class="operator">(</span><span class="cons_Var"><a href="#s_14_21" id="s_39_21" title="a reference to a single-file definition"><span class="token sort_Id">s</span></a></span><span class="operator">,</span> <span class="cons_Str"><span class="operator">"</span>includeHead<span class="operator">"</span></span><span class="operator">,</span> <span class="operator">[</span><a href="../../types/built-ins.stx/#string_48_3" id="string_39_40" title="a reference to a single-file definition"><span class="keyword">string</span></a><span class="operator">(</span><span class="cons_Var"><a href="#s_14_21" id="s_39_47" title="a reference to a single-file definition"><span class="token sort_Id">s</span></a></span><span class="operator">)]),</span>

    <a href="../../webdsl.stx/#declareTemplate_151_3" id="declareTemplate_41_5" title="a reference to a single-file definition"><span class="token sort_Id">declareTemplate</span></a><span class="operator">(</span><span class="cons_Var"><a href="#s_14_21" id="s_41_21" title="a reference to a single-file definition"><span class="token sort_Id">s</span></a></span><span class="operator">,</span> <span class="cons_Str"><span class="operator">"</span>templateContext<span class="operator">"</span></span><span class="operator">,</span> <span class="operator">[</span><a href="../../types/built-ins.stx/#string_48_3" id="string_41_44" title="a reference to a single-file definition"><span class="keyword">string</span></a><span class="operator">(</span><span class="cons_Var"><a href="#s_14_21" id="s_41_51" title="a reference to a single-file definition"><span class="token sort_Id">s</span></a></span><span class="operator">)]),</span>

    <a href="../../webdsl.stx/#declarePage_163_3" id="declarePage_43_5" title="a reference to a single-file definition"><span class="token sort_Id">declarePage</span></a><span class="operator">(</span><span class="cons_Var"><a href="#s_14_21" id="s_43_17" title="a reference to a single-file definition"><span class="token sort_Id">s</span></a></span><span class="operator">,</span> <span class="cons_Str"><span class="operator">"</span>url<span class="operator">"</span></span><span class="operator">,</span> <span class="operator">[</span><a href="../../types/built-ins.stx/#string_48_3" id="string_43_28" title="a reference to a single-file definition"><span class="keyword">string</span></a><span class="operator">(</span><span class="cons_Var"><a href="#s_14_21" id="s_43_35" title="a reference to a single-file definition"><span class="token sort_Id">s</span></a></span><span class="operator">)]).</span>

<span class="keyword">rules</span> <span class="layout">// navigate function call</span>

  <a href="../../webdsl.stx/#typeOfExp_388_3" id="typeOfExp_47_3" title="a reference to a single-file definition"><span class="token sort_Id">typeOfExp</span></a><span class="operator">(</span><span class="cons_Var">s</span><span class="operator">,</span> <span class="cons_Op"><a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx/#ThisCall2Exp_135_5" id="ThisCall2Exp_47_16" title="a reference to a single-file definition"><span class="token sort_Id">ThisCall2Exp</span></a><span class="operator">(</span><span class="cons_Op"><a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx/#ThisCall_136_5" id="ThisCall_47_29" title="a reference to a single-file definition"><span class="token sort_Id">ThisCall</span></a><span class="operator">(</span><span class="cons_Str"><span class="operator">"</span>navigate<span class="operator">"</span></span><span class="operator">,</span> <span class="operator">[</span><span class="cons_Op"><a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx/#ThisCall2Exp_135_5" id="ThisCall2Exp_47_51" title="a reference to a single-file definition"><span class="token sort_Id">ThisCall2Exp</span></a><span class="operator">(</span><span class="cons_Op"><a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx/#ThisCall_136_5" id="ThisCall_47_64" title="a reference to a single-file definition"><span class="token sort_Id">ThisCall</span></a><span class="operator">(</span><span class="cons_Var"><a href="#p_48_28" id="p_47_73" title="a definition with a single reference"><span class="token sort_Id">p</span></a></span><span class="operator">,</span> <span class="cons_Var"><a href="#args_48_31" id="args_47_76" title="a definition with a single reference"><span class="token sort_Id">args</span></a></span><span class="operator">)</span></span><span class="operator">)</span></span><span class="operator">])</span></span><span class="operator">)</span></span><span class="operator">)</span> <span class="operator">=</span> <a href="../../types/built-ins.stx/#string_48_3" id="string_47_89" title="a reference to a single-file definition"><span class="keyword">string</span></a><span class="operator">(</span><span class="cons_Var"><a href="#s_48_25" id="s_47_96" title="a definition with a single reference"><span class="token sort_Id">s</span></a></span><span class="operator">)</span> <span class="operator">:-</span>
    <a href="../template-calls.stx/#pageCallOk_internal_84_3" id="pageCallOk_internal_48_5" title="a reference to a single-file definition"><span class="token sort_Id">pageCallOk_internal</span></a><span class="operator">(</span><span class="cons_Var"><a href="#s_47_96" id="s_48_25" title="a reference to a single-file definition"><span class="token sort_Id">s</span></a></span><span class="operator">,</span> <span class="cons_Var"><a href="#p_47_73" id="p_48_28" title="a reference to a single-file definition"><span class="token sort_Id">p</span></a></span><span class="operator">,</span> <span class="cons_Var"><a href="#args_47_76" id="args_48_31" title="a reference to a single-file definition"><span class="token sort_Id">args</span></a></span><span class="operator">).</span>

  <a href="../../webdsl.stx/#typeOfExp_388_3" id="typeOfExp_50_3" title="a reference to a single-file definition"><span class="token sort_Id">typeOfExp</span></a><span class="operator">(</span><span class="cons_Var"><span id="s_50_13" title="a definition with no references"><span class="token sort_Id">s</span></span></span><span class="operator">,</span> <span class="cons_Op"><a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx/#ThisCall2Exp_135_5" id="ThisCall2Exp_50_16" title="a reference to a single-file definition"><span class="token sort_Id">ThisCall2Exp</span></a><span class="operator">(</span><span class="cons_Op"><a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx/#ThisCall_136_5" id="ThisCall_50_29" title="a reference to a single-file definition"><span class="token sort_Id">ThisCall</span></a><span class="operator">(</span><span class="cons_Str"><span class="operator">"</span>navigate<span class="operator">"</span></span><span class="operator">,</span> <span class="operator">[_])</span></span><span class="operator">)</span></span><span class="operator">)</span> <span class="operator">=</span> <span class="cons_Op"><a href="../../webdsl-types.stx/#UNTYPED_49_5" id="UNTYPED_50_59" title="a reference to a single-file definition"><span class="token sort_Id">UNTYPED</span></a><span class="operator">()</span></span> <span class="operator">:-</span>
    <span class="keyword">false</span> <span class="operator">|</span> <span class="keyword">error</span> <span class="operator">$[</span><span class="cons_Text">Navigate function should have a page call or url(...) argument</span><span class="operator">].</span>

</code></pre></td></tr></tbody></table></div>

<div id="modal">
  <div id="modal-content">
    <span id="modal-close">&times;</span>
    <h2 id="modal-h2"></h2>
    <p  id="modal-p"></p>
    <ul id="modal-ul"></ul>
  </div>
</div>
