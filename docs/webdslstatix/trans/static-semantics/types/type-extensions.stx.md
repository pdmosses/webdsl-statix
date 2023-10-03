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
<td class="code"><pre><code><span class="keyword">module</span> <a href="../../webdsl-types.stx#static-semantics/types/type-extensions_124_162" id="static-semantics/types/type-extensions_7_45" title="Referenced at ../../webdsl-types.stx line 7">static-semantics/types/type-extensions</a>

<span class="keyword">imports</span>
  <a href="../../actions/functions.stx#static-semantics/actions/functions_7_41" id="static-semantics/actions/functions_57_91" title="Defined at ../../actions/functions.stx line 1">static-semantics/actions/functions</a>

  <a href="../built-ins.stx#static-semantics/types/built-ins_7_39" id="static-semantics/types/built-ins_95_127" title="Defined at ../built-ins.stx line 1">static-semantics/types/built-ins</a>

  <a href="../../webdsl-entities.stx#static-semantics/webdsl-entities_7_39" id="static-semantics/webdsl-entities_131_163" title="Defined at ../../webdsl-entities.stx line 1">static-semantics/webdsl-entities</a>
  <a href="../../webdsl-native.stx#static-semantics/webdsl-native_7_37" id="static-semantics/webdsl-native_166_196" title="Defined at ../../webdsl-native.stx line 1">static-semantics/webdsl-native</a>
  <a href="../../webdsl-types.stx#static-semantics/webdsl-types_7_36" id="static-semantics/webdsl-types_199_228" title="Defined at ../../webdsl-types.stx line 1">static-semantics/webdsl-types</a>
  <a href="../../webdsl.stx#static-semantics/webdsl_7_30" id="static-semantics/webdsl_231_254" title="Defined at ../../webdsl.stx line 1">static-semantics/webdsl</a>

<span class="keyword">rules</span>

  <a href="../../webdsl.stx#defOk_15473_15478" id="defOk_265_270" title="Defined at ../../webdsl.stx line 356">defOk</a>(<a href="#s_323_324" id="s_271_272" title="Referenced at line 16, 17, 18, 19, 20">s</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-Type-sig.stx#TypeDef_319_326" id="TypeDef_274_281" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Type-sig.stx line 21">TypeDef</a>(<a href="#name_326_330" id="name_282_286" title="Referenced at line 16, 16, 16, 18, 19">name</a>, <a href="#defs_624_628" id="defs_288_292" title="Referenced at line 20">defs</a>)) :- {<a href="#s_type_411_417" id="s_type_299_305" title="Referenced at line 17, 17, 18, 19, 20">s_type</a>}
    <a href="../built-ins.stx#builtInType_1374_1385" id="builtInType_311_322" title="Defined at ../built-ins.stx line 34">builtInType</a>(<a href="#s_271_272" id="s_323_324" title="Defined at line 15">s</a>, <a href="#name_282_286" id="name_326_330" title="Defined at line 15">name</a>) == <a href="../../webdsl-types.stx#BUILTINTYPE_1001_1012" id="BUILTINTYPE_335_346" title="Defined at ../../webdsl-types.stx line 40">BUILTINTYPE</a>(<a href="#name_282_286" id="name_347_351" title="Defined at line 15">name</a>, _) | <span class="keyword">error</span> $[Type [<a href="#name_282_286" id="name_372_376" title="Defined at line 15">name</a>] is not a built-in type],
    <span class="keyword">new</span> <a href="#s_type_299_305" id="s_type_411_417" title="Defined at line 15">s_type</a>, <a href="#s_type_299_305" id="s_type_419_425" title="Defined at line 15">s_type</a> -<a href="../../webdsl.stx#DEF_1498_1501" id="DEF_427_430" title="Defined at ../../webdsl.stx line 49">DEF</a>-&gt; <a href="#s_271_272" id="s_433_434" title="Defined at line 15">s</a>,
    <a href="../../webdsl.stx#declareExtendScope_4401_4419" id="declareExtendScope_440_458" title="Defined at ../../webdsl.stx line 133">declareExtendScope</a>(<a href="#s_271_272" id="s_459_460" title="Defined at line 15">s</a>, <a href="#name_282_286" id="name_462_466" title="Defined at line 15">name</a>, <a href="#s_type_299_305" id="s_type_468_474" title="Defined at line 15">s_type</a>), <span class="layout">// declare s_type to be linked to other scopes from type name</span>
    <a href="../../webdsl-entities.stx#extendScopes_2356_2368" id="extendScopes_543_555" title="Defined at ../../webdsl-entities.stx line 56">extendScopes</a>(<a href="../../webdsl.stx#resolveExtendScope_4524_4542" id="resolveExtendScope_556_574" title="Defined at ../../webdsl.stx line 137">resolveExtendScope</a>(<a href="#s_271_272" id="s_575_576" title="Defined at line 15">s</a>, <a href="#name_282_286" id="name_578_582" title="Defined at line 15">name</a>), <a href="#s_type_299_305" id="s_type_585_591" title="Defined at line 15">s_type</a>),
    <a href="#typeElementsOk_634_648" id="typeElementsOk_598_612" title="Defined at line 22">typeElementsOk</a>(<a href="#s_271_272" id="s_613_614" title="Defined at line 15">s</a>, <a href="#s_type_299_305" id="s_type_616_622" title="Defined at line 15">s_type</a>, <a href="#defs_288_292" id="defs_624_628" title="Defined at line 15">defs</a>).

  <a href="#typeElementsOk_598_612" id="typeElementsOk_634_648" title="Referenced at line 20">typeElementsOk</a> <span class="keyword">maps</span> <a href="#typeElementOk_685_698" id="typeElementOk_654_667" title="Defined at line 23">typeElementOk</a>(*, *, <span class="keyword">list</span>(*))
  <a href="#typeElementOk_654_667" id="typeElementOk_685_698" title="Referenced at line 22, 24, 27">typeElementOk</a> : <span class="keyword">scope</span> * <span class="keyword">scope</span> * <a href="../../../../src-gen/statix/signatures/WebDSL-Type-sig.stx#TypeElement_224_235" id="TypeElement_717_728" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Type-sig.stx line 13">TypeElement</a>
  <a href="#typeElementOk_685_698" id="typeElementOk_731_744" title="Defined at line 23">typeElementOk</a>(<a href="#s_809_810" id="s_745_746" title="Referenced at line 25">s</a>, <a href="#s_type_812_818" id="s_type_748_754" title="Referenced at line 25">s_type</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-Type-sig.stx#TypeFunction_411_423" id="TypeFunction_756_768" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Type-sig.stx line 23">TypeFunction</a>(<a href="#function_820_828" id="function_769_777" title="Referenced at line 25">function</a>)) :-
    <a href="../../webdsl-native.stx#nativeClassFunctionOk_3529_3550" id="nativeClassFunctionOk_787_808" title="Defined at ../../webdsl-native.stx line 83">nativeClassFunctionOk</a>(<a href="#s_745_746" id="s_809_810" title="Defined at line 24">s</a>, <a href="#s_type_748_754" id="s_type_812_818" title="Defined at line 24">s_type</a>, <a href="#function_769_777" id="function_820_828" title="Defined at line 24">function</a>).

  <a href="#typeElementOk_685_698" id="typeElementOk_834_847" title="Defined at line 23">typeElementOk</a>(<a href="#s_947_948" id="s_848_849" title="Referenced at line 28">s</a>, <a href="#s_type_950_956" id="s_type_851_857" title="Referenced at line 28">s_type</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-Type-sig.stx#TypeFunctionFromStatic_456_478" id="TypeFunctionFromStatic_859_881" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Type-sig.stx line 24">TypeFunctionFromStatic</a>(<a href="../../../../src-gen/statix/signatures/WebDSL-Native-sig.stx#NCFunctionFromStatic_1263_1283" id="NCFunctionFromStatic_882_902" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Native-sig.stx line 46">NCFunctionFromStatic</a>(_, <a href="#function_958_966" id="function_906_914" title="Referenced at line 28">function</a>))) :-
    <a href="../../webdsl-native.stx#nativeClassFunctionOk_3529_3550" id="nativeClassFunctionOk_925_946" title="Defined at ../../webdsl-native.stx line 83">nativeClassFunctionOk</a>(<a href="#s_848_849" id="s_947_948" title="Defined at line 27">s</a>, <a href="#s_type_851_857" id="s_type_950_956" title="Defined at line 27">s_type</a>, <a href="#function_906_914" id="function_958_966" title="Defined at line 27">function</a>).

<span class="keyword">rules</span> <span class="layout">// typing of expressions</span>

  <a href="../../actions/functions.stx#typeOfCall_1322_1332" id="typeOfCall_1004_1014" title="Defined at ../../actions/functions.stx line 41">typeOfCall</a>(s, <a href="../../webdsl-types.stx#BUILTINTYPE_1001_1012" id="BUILTINTYPE_1018_1029" title="Defined at ../../webdsl-types.stx line 40">BUILTINTYPE</a>(_, <a href="#s_type_1141_1147" id="s_type_1033_1039" title="Referenced at line 33">s_type</a>), <a href="#f_1149_1150" id="f_1042_1043" title="Referenced at line 33">f</a>, args) = <a href="../../actions/functions.stx#typeOfFunctionCallInternal_1877_1903" id="typeOfFunctionCallInternal_1053_1079" title="Defined at ../../actions/functions.stx line 51">typeOfFunctionCallInternal</a>(<span id="s_1080_1081" title="Not referenced locally, nor via imports">s</span>, f, <span id="args_1086_1090" title="Not referenced locally, nor via imports">args</span>, <a href="#funSigs_1108_1115" id="funSigs_1092_1099" title="Referenced at line 33">funSigs</a>) :-
    <a href="#funSigs_1092_1099" id="funSigs_1108_1115" title="Defined at line 32">funSigs</a> == <a href="../../webdsl.stx#resolveEntityFunction_9696_9717" id="resolveEntityFunction_1119_1140" title="Defined at ../../webdsl.stx line 234">resolveEntityFunction</a>(<a href="#s_type_1033_1039" id="s_type_1141_1147" title="Defined at line 32">s_type</a>, <a href="#f_1042_1043" id="f_1149_1150" title="Defined at line 32">f</a>).

  <a href="../../actions/functions.stx#typeOfCall_1322_1332" id="typeOfCall_1156_1166" title="Defined at ../../actions/functions.stx line 41">typeOfCall</a>(<span id="s_1167_1168" title="Not referenced locally, nor via imports">s</span>, <a href="../../webdsl-types.stx#STATICBUILTINTYPE_1042_1059" id="STATICBUILTINTYPE_1170_1187" title="Defined at ../../webdsl-types.stx line 41">STATICBUILTINTYPE</a>(_, <a href="#s_type_1305_1311" id="s_type_1191_1197" title="Referenced at line 36">s_type</a>), <a href="#f_1313_1314" id="f_1200_1201" title="Referenced at line 36">f</a>, args) = <a href="../../actions/functions.stx#typeOfFunctionCallInternal_1877_1903" id="typeOfFunctionCallInternal_1211_1237" title="Defined at ../../actions/functions.stx line 51">typeOfFunctionCallInternal</a>(s, f, <span id="args_1244_1248" title="Not referenced locally, nor via imports">args</span>, <a href="#funSigs_1266_1273" id="funSigs_1250_1257" title="Referenced at line 36">funSigs</a>) :-
    <a href="#funSigs_1250_1257" id="funSigs_1266_1273" title="Defined at line 35">funSigs</a> == <a href="../../webdsl.stx#resolveStaticEntityFunction_10356_10383" id="resolveStaticEntityFunction_1277_1304" title="Defined at ../../webdsl.stx line 245">resolveStaticEntityFunction</a>(<a href="#s_type_1191_1197" id="s_type_1305_1311" title="Defined at line 35">s_type</a>, <a href="#f_1200_1201" id="f_1313_1314" title="Defined at line 35">f</a>).

</code></pre></td></tr></tbody></table></div>