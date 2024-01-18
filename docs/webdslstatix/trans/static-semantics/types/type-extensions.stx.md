---
title: type-extensions.stx
hide:
  - toc
---

# `type-extensions.stx`

:simple-github: [pdmosses/webdsl-statix/webdslstatix/trans/static-semantics/types/type-extensions.stx]

[pdmosses/webdsl-statix/webdslstatix/trans/static-semantics/types/type-extensions.stx]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/trans/static-semantics/types/type-extensions.stx "The source file on GitHub"

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
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <a href="../../webdsl-types.stx/#static-semantics/types/type-extensions_7_3" id="static-semantics/types/type-extensions_1_8" title="Referenced at ../../webdsl-types.stx line 7"><span class="token sort_Id">static-semantics/types/type-extensions</span></a>

<span class="keyword">imports</span>
  <a href="../../actions/functions.stx/#static-semantics/actions/functions_1_8" id="static-semantics/actions/functions_4_3" title="Defined at ../../actions/functions.stx line 1"><span class="token sort_Id">static-semantics/actions/functions</span></a>

  <a href="../built-ins.stx/#static-semantics/types/built-ins_1_8" id="static-semantics/types/built-ins_6_3" title="Defined at ../built-ins.stx line 1"><span class="token sort_Id">static-semantics/types/built-ins</span></a>

  <a href="../../webdsl-entities.stx/#static-semantics/webdsl-entities_1_8" id="static-semantics/webdsl-entities_8_3" title="Defined at ../../webdsl-entities.stx line 1"><span class="token sort_Id">static-semantics/webdsl-entities</span></a>
  <a href="../../webdsl-native.stx/#static-semantics/webdsl-native_1_8" id="static-semantics/webdsl-native_9_3" title="Defined at ../../webdsl-native.stx line 1"><span class="token sort_Id">static-semantics/webdsl-native</span></a>
  <a href="../../webdsl-types.stx/#static-semantics/webdsl-types_1_8" id="static-semantics/webdsl-types_10_3" title="Defined at ../../webdsl-types.stx line 1"><span class="token sort_Id">static-semantics/webdsl-types</span></a>
  <a href="../../webdsl.stx/#static-semantics/webdsl_1_8" id="static-semantics/webdsl_11_3" title="Defined at ../../webdsl.stx line 1"><span class="token sort_Id">static-semantics/webdsl</span></a>

<span class="keyword">rules</span>

  <a href="../../webdsl.stx/#defOk_356_3" id="defOk_15_3" title="Defined at ../../webdsl.stx line 356"><span class="token sort_Id">defOk</span></a><span class="operator">(</span><span class="cons_Var"><a href="#s_16_17" id="s_15_9" title="Referenced at line 16, 17, 18, 19, 20"><span class="token sort_Id">s</span></a></span><span class="operator">,</span> <span class="cons_Op"><a href="../../../../src-gen/statix/signatures/WebDSL-Type-sig.stx/#TypeDef_21_5" id="TypeDef_15_12" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Type-sig.stx line 21"><span class="token sort_Id">TypeDef</span></a><span class="operator">(</span><span class="cons_Var"><a href="#name_16_20" id="name_15_20" title="Referenced at line 16, 18, 19"><span class="token sort_Id">name</span></a></span><span class="operator">,</span> <span class="cons_Var"><a href="#defs_20_31" id="defs_15_26" title="Referenced at line 20"><span class="token sort_Id">defs</span></a></span><span class="operator">)</span></span><span class="operator">)</span> <span class="operator">:-</span> <span class="operator">{</span><span class="cons_Var"><a href="#s_type_17_9" id="s_type_15_37" title="Referenced at line 17, 18, 19, 20"><span class="token sort_Id">s_type</span></a></span><span class="operator">}</span>
    <a href="../built-ins.stx/#builtInType_34_3" id="builtInType_16_5" title="Defined at ../built-ins.stx line 34"><span class="token sort_Id">builtInType</span></a><span class="operator">(</span><span class="cons_Var"><a href="#s_15_9" id="s_16_17" title="Defined at line 15"><span class="token sort_Id">s</span></a></span><span class="operator">,</span> <span class="cons_Var"><a href="#name_15_20" id="name_16_20" title="Defined at line 15"><span class="token sort_Id">name</span></a></span><span class="operator">)</span> <span class="operator">==</span> <span class="cons_Op"><a href="../../webdsl-types.stx/#BUILTINTYPE_40_5" id="BUILTINTYPE_16_29" title="Defined at ../../webdsl-types.stx line 40"><span class="token sort_Id">BUILTINTYPE</span></a><span class="operator">(</span><span class="cons_Var"><a href="#name_15_20" id="name_16_41" title="Defined at line 15"><span class="token sort_Id">name</span></a></span><span class="operator">,</span> <span class="operator">_)</span></span> <span class="operator">|</span> <span class="keyword">error</span> <span class="operator">$[</span><span class="cons_Text">Type </span><span class="operator">[</span><span class="cons_Var"><a href="#name_15_20" id="name_16_66" title="Defined at line 15"><span class="token sort_Id">name</span></a></span><span class="operator">]</span><span class="cons_Text"> is not a built-in type</span><span class="operator">],</span>
    <span class="keyword">new</span> <span class="cons_Var"><a href="#s_type_15_37" id="s_type_17_9" title="Defined at line 15"><span class="token sort_Id">s_type</span></a></span><span class="operator">,</span> <span class="cons_Var"><a href="#s_type_15_37" id="s_type_17_17" title="Defined at line 15"><span class="token sort_Id">s_type</span></a></span> <span class="operator">-</span><span class="cons_Label"><a href="../../webdsl.stx/#DEF_49_7" id="DEF_17_25" title="Defined at ../../webdsl.stx line 49"><span class="token sort_Id">DEF</span></a></span><span class="operator">-&gt;</span> <span class="cons_Var"><a href="#s_15_9" id="s_17_31" title="Defined at line 15"><span class="token sort_Id">s</span></a></span><span class="operator">,</span>
    <a href="../../webdsl.stx/#declareExtendScope_133_3" id="declareExtendScope_18_5" title="Defined at ../../webdsl.stx line 133"><span class="token sort_Id">declareExtendScope</span></a><span class="operator">(</span><span class="cons_Var"><a href="#s_15_9" id="s_18_24" title="Defined at line 15"><span class="token sort_Id">s</span></a></span><span class="operator">,</span> <span class="cons_Var"><a href="#name_15_20" id="name_18_27" title="Defined at line 15"><span class="token sort_Id">name</span></a></span><span class="operator">,</span> <span class="cons_Var"><a href="#s_type_15_37" id="s_type_18_33" title="Defined at line 15"><span class="token sort_Id">s_type</span></a></span><span class="operator">),</span> <span class="layout">// declare s_type to be linked to other scopes from type name</span>
    <a href="../../webdsl-entities.stx/#extendScopes_56_3" id="extendScopes_19_5" title="Defined at ../../webdsl-entities.stx line 56"><span class="token sort_Id">extendScopes</span></a><span class="operator">(</span><a href="../../webdsl.stx/#resolveExtendScope_137_3" id="resolveExtendScope_19_18" title="Defined at ../../webdsl.stx line 137"><span class="token sort_Id">resolveExtendScope</span></a><span class="operator">(</span><span class="cons_Var"><a href="#s_15_9" id="s_19_37" title="Defined at line 15"><span class="token sort_Id">s</span></a></span><span class="operator">,</span> <span class="cons_Var"><a href="#name_15_20" id="name_19_40" title="Defined at line 15"><span class="token sort_Id">name</span></a></span><span class="operator">),</span> <span class="cons_Var"><a href="#s_type_15_37" id="s_type_19_47" title="Defined at line 15"><span class="token sort_Id">s_type</span></a></span><span class="operator">),</span>
    <a href="#typeElementsOk_22_3" id="typeElementsOk_20_5" title="Defined at line 22"><span class="token sort_Id">typeElementsOk</span></a><span class="operator">(</span><span class="cons_Var"><a href="#s_15_9" id="s_20_20" title="Defined at line 15"><span class="token sort_Id">s</span></a></span><span class="operator">,</span> <span class="cons_Var"><a href="#s_type_15_37" id="s_type_20_23" title="Defined at line 15"><span class="token sort_Id">s_type</span></a></span><span class="operator">,</span> <span class="cons_Var"><a href="#defs_15_26" id="defs_20_31" title="Defined at line 15"><span class="token sort_Id">defs</span></a></span><span class="operator">).</span>

  <a href="#typeElementsOk_20_5" id="typeElementsOk_22_3" title="Referenced at line 20"><span class="token sort_Id">typeElementsOk</span></a> <span class="keyword">maps</span> <a href="#typeElementOk_23_3" id="typeElementOk_22_23" title="Defined at line 23"><span class="token sort_Id">typeElementOk</span></a><span class="operator">(*,</span> <span class="operator">*,</span> <span class="keyword">list</span><span class="operator">(*))</span>
  <a href="#typeElementOk_22_23" id="typeElementOk_23_3" title="Referenced at line 22, 24, 27"><span class="token sort_Id">typeElementOk</span></a> <span class="operator">:</span> <span class="cons_ScopeSort"><span class="keyword">scope</span></span> <span class="operator">*</span> <span class="cons_ScopeSort"><span class="keyword">scope</span></span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="../../../../src-gen/statix/signatures/WebDSL-Type-sig.stx/#TypeElement_13_5" id="TypeElement_23_35" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Type-sig.stx line 13"><span class="token sort_Id">TypeElement</span></a></span>
  <a href="#typeElementOk_23_3" id="typeElementOk_24_3" title="Defined at line 23"><span class="token sort_Id">typeElementOk</span></a><span class="operator">(</span><span class="cons_Var"><a href="#s_25_27" id="s_24_17" title="Referenced at line 25"><span class="token sort_Id">s</span></a></span><span class="operator">,</span> <span class="cons_Var"><a href="#s_type_25_30" id="s_type_24_20" title="Referenced at line 25"><span class="token sort_Id">s_type</span></a></span><span class="operator">,</span> <span class="cons_Op"><a href="../../../../src-gen/statix/signatures/WebDSL-Type-sig.stx/#TypeFunction_23_5" id="TypeFunction_24_28" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Type-sig.stx line 23"><span class="token sort_Id">TypeFunction</span></a><span class="operator">(</span><span class="cons_Var"><a href="#function_25_38" id="function_24_41" title="Referenced at line 25"><span class="token sort_Id">function</span></a></span><span class="operator">)</span></span><span class="operator">)</span> <span class="operator">:-</span>
    <a href="../../webdsl-native.stx/#nativeClassFunctionOk_83_3" id="nativeClassFunctionOk_25_5" title="Defined at ../../webdsl-native.stx line 83"><span class="token sort_Id">nativeClassFunctionOk</span></a><span class="operator">(</span><span class="cons_Var"><a href="#s_24_17" id="s_25_27" title="Defined at line 24"><span class="token sort_Id">s</span></a></span><span class="operator">,</span> <span class="cons_Var"><a href="#s_type_24_20" id="s_type_25_30" title="Defined at line 24"><span class="token sort_Id">s_type</span></a></span><span class="operator">,</span> <span class="cons_Var"><a href="#function_24_41" id="function_25_38" title="Defined at line 24"><span class="token sort_Id">function</span></a></span><span class="operator">).</span>

  <a href="#typeElementOk_23_3" id="typeElementOk_27_3" title="Defined at line 23"><span class="token sort_Id">typeElementOk</span></a><span class="operator">(</span><span class="cons_Var"><a href="#s_28_27" id="s_27_17" title="Referenced at line 28"><span class="token sort_Id">s</span></a></span><span class="operator">,</span> <span class="cons_Var"><a href="#s_type_28_30" id="s_type_27_20" title="Referenced at line 28"><span class="token sort_Id">s_type</span></a></span><span class="operator">,</span> <span class="cons_Op"><a href="../../../../src-gen/statix/signatures/WebDSL-Type-sig.stx/#TypeFunctionFromStatic_24_5" id="TypeFunctionFromStatic_27_28" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Type-sig.stx line 24"><span class="token sort_Id">TypeFunctionFromStatic</span></a><span class="operator">(</span><span class="cons_Op"><a href="../../../../src-gen/statix/signatures/WebDSL-Native-sig.stx/#NCFunctionFromStatic_46_5" id="NCFunctionFromStatic_27_51" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Native-sig.stx line 46"><span class="token sort_Id">NCFunctionFromStatic</span></a><span class="operator">(_,</span> <span class="cons_Var"><a href="#function_28_38" id="function_27_75" title="Referenced at line 28"><span class="token sort_Id">function</span></a></span><span class="operator">)</span></span><span class="operator">)</span></span><span class="operator">)</span> <span class="operator">:-</span>
    <a href="../../webdsl-native.stx/#nativeClassFunctionOk_83_3" id="nativeClassFunctionOk_28_5" title="Defined at ../../webdsl-native.stx line 83"><span class="token sort_Id">nativeClassFunctionOk</span></a><span class="operator">(</span><span class="cons_Var"><a href="#s_27_17" id="s_28_27" title="Defined at line 27"><span class="token sort_Id">s</span></a></span><span class="operator">,</span> <span class="cons_Var"><a href="#s_type_27_20" id="s_type_28_30" title="Defined at line 27"><span class="token sort_Id">s_type</span></a></span><span class="operator">,</span> <span class="cons_Var"><a href="#function_27_75" id="function_28_38" title="Defined at line 27"><span class="token sort_Id">function</span></a></span><span class="operator">).</span>

<span class="keyword">rules</span> <span class="layout">// typing of expressions</span>

  <a href="../../actions/functions.stx/#typeOfCall_41_3" id="typeOfCall_32_3" title="Defined at ../../actions/functions.stx line 41"><span class="token sort_Id">typeOfCall</span></a><span class="operator">(</span><span class="cons_Var">s</span><span class="operator">,</span> <span class="cons_Op"><a href="../../webdsl-types.stx/#BUILTINTYPE_40_5" id="BUILTINTYPE_32_17" title="Defined at ../../webdsl-types.stx line 40"><span class="token sort_Id">BUILTINTYPE</span></a><span class="operator">(_,</span> <span class="cons_Var"><a href="#s_type_33_38" id="s_type_32_32" title="Referenced at line 33"><span class="token sort_Id">s_type</span></a></span><span class="operator">)</span></span><span class="operator">,</span> <span class="cons_Var">f</span><span class="operator">,</span> <span class="cons_Var">args</span><span class="operator">)</span> <span class="operator">=</span> <a href="../../actions/functions.stx/#typeOfFunctionCallInternal_51_3" id="typeOfFunctionCallInternal_32_52" title="Defined at ../../actions/functions.stx line 51"><span class="token sort_Id">typeOfFunctionCallInternal</span></a><span class="operator">(</span><span class="cons_Var"><span id="s_32_79" title="Not referenced"><span class="token sort_Id">s</span></span></span><span class="operator">,</span> <span class="cons_Var"><a href="#f_33_46" id="f_32_82" title="Referenced at line 33"><span class="token sort_Id">f</span></a></span><span class="operator">,</span> <span class="cons_Var"><span id="args_32_85" title="Not referenced"><span class="token sort_Id">args</span></span></span><span class="operator">,</span> <span class="cons_Var"><a href="#funSigs_33_5" id="funSigs_32_91" title="Referenced at line 33"><span class="token sort_Id">funSigs</span></a></span><span class="operator">)</span> <span class="operator">:-</span>
    <span class="cons_Var"><a href="#funSigs_32_91" id="funSigs_33_5" title="Defined at line 32"><span class="token sort_Id">funSigs</span></a></span> <span class="operator">==</span> <a href="../../webdsl.stx/#resolveEntityFunction_234_3" id="resolveEntityFunction_33_16" title="Defined at ../../webdsl.stx line 234"><span class="token sort_Id">resolveEntityFunction</span></a><span class="operator">(</span><span class="cons_Var"><a href="#s_type_32_32" id="s_type_33_38" title="Defined at line 32"><span class="token sort_Id">s_type</span></a></span><span class="operator">,</span> <span class="cons_Var"><a href="#f_32_82" id="f_33_46" title="Defined at line 32"><span class="token sort_Id">f</span></a></span><span class="operator">).</span>

  <a href="../../actions/functions.stx/#typeOfCall_41_3" id="typeOfCall_35_3" title="Defined at ../../actions/functions.stx line 41"><span class="token sort_Id">typeOfCall</span></a><span class="operator">(</span><span class="cons_Var">s</span><span class="operator">,</span> <span class="cons_Op"><a href="../../webdsl-types.stx/#STATICBUILTINTYPE_41_5" id="STATICBUILTINTYPE_35_17" title="Defined at ../../webdsl-types.stx line 41"><span class="token sort_Id">STATICBUILTINTYPE</span></a><span class="operator">(_,</span> <span class="cons_Var"><a href="#s_type_36_44" id="s_type_35_38" title="Referenced at line 36"><span class="token sort_Id">s_type</span></a></span><span class="operator">)</span></span><span class="operator">,</span> <span class="cons_Var">f</span><span class="operator">,</span> <span class="cons_Var">args</span><span class="operator">)</span> <span class="operator">=</span> <a href="../../actions/functions.stx/#typeOfFunctionCallInternal_51_3" id="typeOfFunctionCallInternal_35_58" title="Defined at ../../actions/functions.stx line 51"><span class="token sort_Id">typeOfFunctionCallInternal</span></a><span class="operator">(</span><span class="cons_Var"><span id="s_35_85" title="Not referenced"><span class="token sort_Id">s</span></span></span><span class="operator">,</span> <span class="cons_Var"><a href="#f_36_52" id="f_35_88" title="Referenced at line 36"><span class="token sort_Id">f</span></a></span><span class="operator">,</span> <span class="cons_Var"><span id="args_35_91" title="Not referenced"><span class="token sort_Id">args</span></span></span><span class="operator">,</span> <span class="cons_Var"><a href="#funSigs_36_5" id="funSigs_35_97" title="Referenced at line 36"><span class="token sort_Id">funSigs</span></a></span><span class="operator">)</span> <span class="operator">:-</span>
    <span class="cons_Var"><a href="#funSigs_35_97" id="funSigs_36_5" title="Defined at line 35"><span class="token sort_Id">funSigs</span></a></span> <span class="operator">==</span> <a href="../../webdsl.stx/#resolveStaticEntityFunction_245_3" id="resolveStaticEntityFunction_36_16" title="Defined at ../../webdsl.stx line 245"><span class="token sort_Id">resolveStaticEntityFunction</span></a><span class="operator">(</span><span class="cons_Var"><a href="#s_type_35_38" id="s_type_36_44" title="Defined at line 35"><span class="token sort_Id">s_type</span></a></span><span class="operator">,</span> <span class="cons_Var"><a href="#f_35_88" id="f_36_52" title="Defined at line 35"><span class="token sort_Id">f</span></a></span><span class="operator">).</span>

</code></pre></td></tr></tbody></table></div>

<div id="modal">
  <div id="modal-content">
    <span id="modal-close">&times;</span>
    <h2 id="modal-h2"></h2>
    <p  id="modal-p"></p>
    <ul id="modal-ul"></ul>
  </div>
</div>
