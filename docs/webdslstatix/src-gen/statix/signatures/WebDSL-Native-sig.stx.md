---
title: WebDSL-Native-sig.stx
hide:
  - toc
---

# `WebDSL-Native-sig.stx`



[pdmosses/webdsl-statix/webdslstatix/src-gen/statix/signatures/WebDSL-Native-sig.stx]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/src-gen/statix/signatures/WebDSL-Native-sig.stx "The source file on GitHub"

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
52
53
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <button class="modal-open" id="signatures/WebDSL-Native-sig_1_8" title="Multi-file references" data-urls="../webdsl-statix-sig.stx/#signatures/WebDSL-Native-sig_18_3 line 18; ../WebDSL-Type-sig.stx/#signatures/WebDSL-Native-sig_7_3 line 7"><span class="token sort_Id">signatures/WebDSL-Native-sig</span></button>

<span class="keyword">imports</span>
  <a href="../WebDSL-Core-sig.stx/#signatures/WebDSL-Core-sig_1_8" id="signatures/WebDSL-Core-sig_4_3" title="Defined at ../WebDSL-Core-sig.stx line 1"><span class="token sort_Id">signatures/WebDSL-Core-sig</span></a>
  <a href="../WebDSL-Lexical-sig.stx/#signatures/WebDSL-Lexical-sig_1_8" id="signatures/WebDSL-Lexical-sig_5_3" title="Defined at ../WebDSL-Lexical-sig.stx line 1"><span class="token sort_Id">signatures/WebDSL-Lexical-sig</span></a>

<span class="keyword">signature</span>

  <span class="keyword">sorts</span>
    <span class="cons_SortDecl"><a href="#NCAlias_21_21" id="NCAlias_10_5" title="Referenced at line 21, 33, 34, 35, 36"><span class="token sort_Id">NCAlias</span></a></span>
    <span class="cons_SortDecl"><a href="#NCSuper_22_21" id="NCSuper_11_5" title="Referenced at line 22, 33, 37, 38"><span class="token sort_Id">NCSuper</span></a></span>
    <span class="cons_SortDecl"><button class="modal-open" id="NCElement_12_5" title="Multi-file references" data-urls="#NCElement_23_23 line 23, 33, 34, 39, 40, 47, 48, 49; ../../../../trans/static-semantics/webdsl-native.stx/#NCElement_37_58 line 37, 64, 97"><span class="token sort_Id">NCElement</span></button></span>
    <span class="cons_SortDecl"><button class="modal-open" id="NativeType_13_5" title="Multi-file references" data-urls="#NativeType_24_24 line 24, 39, 41, 42, 48, 49, 50, 51, 52, 53; ../../../../trans/static-semantics/webdsl-native.stx/#NativeType_118_30 line 118; ../../../../trans/static-semantics/webdsl.stx/#NativeType_38_34 line 38"><span class="token sort_Id">NativeType</span></button></span>
    <span class="cons_SortDecl"><button class="modal-open" id="NCFunction_14_5" title="Multi-file references" data-urls="#NCFunction_25_24 line 25, 40, 41, 46; ../WebDSL-Type-sig.stx/#NCFunction_23_20 line 23; ../../../../trans/static-semantics/webdsl-native.stx/#NCFunction_83_43 line 83"><span class="token sort_Id">NCFunction</span></button></span>
    <span class="cons_SortDecl"><a href="#NCFunctionReturn_26_30" id="NCFunctionReturn_15_5" title="Referenced at line 26, 41, 42, 43"><span class="token sort_Id">NCFunctionReturn</span></a></span>
    <span class="cons_SortDecl"><a href="#NCFunctionStatic_27_30" id="NCFunctionStatic_16_5" title="Referenced at line 27, 41, 44, 45"><span class="token sort_Id">NCFunctionStatic</span></a></span>
    <span class="cons_SortDecl"><button class="modal-open" id="NCFunctionFromStatic_17_5" title="Multi-file references" data-urls="#NCFunctionFromStatic_28_34 line 28, 46, 47; ../WebDSL-Type-sig.stx/#NCFunctionFromStatic_24_30 line 24"><span class="token sort_Id">NCFunctionFromStatic</span></button></span>
    <span class="cons_SortAlias"><a href="#NativeFunId_41_37" id="NativeFunId_18_5" title="Referenced at line 41"><span class="token sort_Id">NativeFunId</span></a> <span class="operator">=</span> <span class="cons_StringSort"><span class="keyword">string</span></span></span>

  <span class="keyword">constructors</span>
    <span class="cons_OpDecl"><span id="NCAlias-Plhdr_21_5" title="Not referenced"><span class="token sort_Id">NCAlias-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#NCAlias_10_5" id="NCAlias_21_21" title="Defined at line 10"><span class="token sort_Id">NCAlias</span></a></span></span>
    <span class="cons_OpDecl"><span id="NCSuper-Plhdr_22_5" title="Not referenced"><span class="token sort_Id">NCSuper-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#NCSuper_11_5" id="NCSuper_22_21" title="Defined at line 11"><span class="token sort_Id">NCSuper</span></a></span></span>
    <span class="cons_OpDecl"><span id="NCElement-Plhdr_23_5" title="Not referenced"><span class="token sort_Id">NCElement-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#NCElement_12_5" id="NCElement_23_23" title="Defined at line 12"><span class="token sort_Id">NCElement</span></a></span></span>
    <span class="cons_OpDecl"><span id="NativeType-Plhdr_24_5" title="Not referenced"><span class="token sort_Id">NativeType-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#NativeType_13_5" id="NativeType_24_24" title="Defined at line 13"><span class="token sort_Id">NativeType</span></a></span></span>
    <span class="cons_OpDecl"><span id="NCFunction-Plhdr_25_5" title="Not referenced"><span class="token sort_Id">NCFunction-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#NCFunction_14_5" id="NCFunction_25_24" title="Defined at line 14"><span class="token sort_Id">NCFunction</span></a></span></span>
    <span class="cons_OpDecl"><span id="NCFunctionReturn-Plhdr_26_5" title="Not referenced"><span class="token sort_Id">NCFunctionReturn-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#NCFunctionReturn_15_5" id="NCFunctionReturn_26_30" title="Defined at line 15"><span class="token sort_Id">NCFunctionReturn</span></a></span></span>
    <span class="cons_OpDecl"><span id="NCFunctionStatic-Plhdr_27_5" title="Not referenced"><span class="token sort_Id">NCFunctionStatic-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#NCFunctionStatic_16_5" id="NCFunctionStatic_27_30" title="Defined at line 16"><span class="token sort_Id">NCFunctionStatic</span></a></span></span>
    <span class="cons_OpDecl"><span id="NCFunctionFromStatic-Plhdr_28_5" title="Not referenced"><span class="token sort_Id">NCFunctionFromStatic-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#NCFunctionFromStatic_17_5" id="NCFunctionFromStatic_28_34" title="Defined at line 17"><span class="token sort_Id">NCFunctionFromStatic</span></a></span></span>

<span class="keyword">signature</span>

  <span class="keyword">constructors</span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/webdsl-native.stx/#NativeClass_22_12" id="NativeClass_33_5" title="Referenced at ../../../../trans/static-semantics/webdsl-native.stx line 22, 26"><span class="token sort_Id">NativeClass</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="../WebDSL-Lexical-sig.stx/#QId_8_5" id="QId_33_19" title="Defined at ../WebDSL-Lexical-sig.stx line 8"><span class="token sort_Id">QId</span></a></span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="#NCAlias_10_5" id="NCAlias_33_25" title="Defined at line 10"><span class="token sort_Id">NCAlias</span></a></span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="#NCSuper_11_5" id="NCSuper_33_35" title="Defined at line 11"><span class="token sort_Id">NCSuper</span></a></span> <span class="operator">*</span> <span class="keyword">list</span><span class="operator">(</span><span class="cons_SimpleSort"><a href="#NCElement_12_5" id="NCElement_33_50" title="Defined at line 12"><span class="token sort_Id">NCElement</span></a></span><span class="operator">)</span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="../WebDSL-Core-sig.stx/#Definition_20_5" id="Definition_33_64" title="Defined at ../WebDSL-Core-sig.stx line 20"><span class="token sort_Id">Definition</span></a></span></span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/webdsl-native.stx/#ExtendNativeClass_50_12" id="ExtendNativeClass_34_5" title="Referenced at ../../../../trans/static-semantics/webdsl-native.stx line 50"><span class="token sort_Id">ExtendNativeClass</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="../WebDSL-Lexical-sig.stx/#QId_8_5" id="QId_34_25" title="Defined at ../WebDSL-Lexical-sig.stx line 8"><span class="token sort_Id">QId</span></a></span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="#NCAlias_10_5" id="NCAlias_34_31" title="Defined at line 10"><span class="token sort_Id">NCAlias</span></a></span> <span class="operator">*</span> <span class="keyword">list</span><span class="operator">(</span><span class="cons_SimpleSort"><a href="#NCElement_12_5" id="NCElement_34_46" title="Defined at line 12"><span class="token sort_Id">NCElement</span></a></span><span class="operator">)</span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="../WebDSL-Core-sig.stx/#Definition_20_5" id="Definition_34_60" title="Defined at ../WebDSL-Core-sig.stx line 20"><span class="token sort_Id">Definition</span></a></span></span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/webdsl-native.stx/#NCAlias_22_27" id="NCAlias_35_5" title="Referenced at ../../../../trans/static-semantics/webdsl-native.stx line 22, 26, 50"><span class="token sort_Id">NCAlias</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="../WebDSL-Lexical-sig.stx/#Id_14_5" id="Id_35_15" title="Defined at ../WebDSL-Lexical-sig.stx line 14"><span class="token sort_Id">Id</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#NCAlias_10_5" id="NCAlias_35_21" title="Defined at line 10"><span class="token sort_Id">NCAlias</span></a></span></span>
    <span class="cons_OpDecl"><span id="NCAliasNone_36_5" title="Not referenced"><span class="token sort_Id">NCAliasNone</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#NCAlias_10_5" id="NCAlias_36_19" title="Defined at line 10"><span class="token sort_Id">NCAlias</span></a></span></span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/webdsl-native.stx/#NCSuper_26_43" id="NCSuper_37_5" title="Referenced at ../../../../trans/static-semantics/webdsl-native.stx line 26"><span class="token sort_Id">NCSuper</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="../WebDSL-Lexical-sig.stx/#Id_14_5" id="Id_37_15" title="Defined at ../WebDSL-Lexical-sig.stx line 14"><span class="token sort_Id">Id</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#NCSuper_11_5" id="NCSuper_37_21" title="Defined at line 11"><span class="token sort_Id">NCSuper</span></a></span></span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/webdsl-native.stx/#NCSuperNone_22_43" id="NCSuperNone_38_5" title="Referenced at ../../../../trans/static-semantics/webdsl-native.stx line 22"><span class="token sort_Id">NCSuperNone</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#NCSuper_11_5" id="NCSuper_38_19" title="Defined at line 11"><span class="token sort_Id">NCSuper</span></a></span></span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/webdsl-native.stx/#NCProperty_70_36" id="NCProperty_39_5" title="Referenced at ../../../../trans/static-semantics/webdsl-native.stx line 70"><span class="token sort_Id">NCProperty</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="../WebDSL-Lexical-sig.stx/#Id_14_5" id="Id_39_18" title="Defined at ../WebDSL-Lexical-sig.stx line 14"><span class="token sort_Id">Id</span></a></span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="#NativeType_13_5" id="NativeType_39_23" title="Defined at line 13"><span class="token sort_Id">NativeType</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#NCElement_12_5" id="NCElement_39_37" title="Defined at line 12"><span class="token sort_Id">NCElement</span></a></span></span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/webdsl-native.stx/#NCFunctionElement_75_36" id="NCFunctionElement_40_5" title="Referenced at ../../../../trans/static-semantics/webdsl-native.stx line 75"><span class="token sort_Id">NCFunctionElement</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#NCFunction_14_5" id="NCFunction_40_25" title="Defined at line 14"><span class="token sort_Id">NCFunction</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#NCElement_12_5" id="NCElement_40_39" title="Defined at line 12"><span class="token sort_Id">NCElement</span></a></span></span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/webdsl-native.stx/#NCFunction_84_37" id="NCFunction_41_5" title="Referenced at ../../../../trans/static-semantics/webdsl-native.stx line 84, 89"><span class="token sort_Id">NCFunction</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#NCFunctionStatic_16_5" id="NCFunctionStatic_41_18" title="Defined at line 16"><span class="token sort_Id">NCFunctionStatic</span></a></span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="#NativeFunId_18_5" id="NativeFunId_41_37" title="Defined at line 18"><span class="token sort_Id">NativeFunId</span></a></span> <span class="operator">*</span> <span class="keyword">list</span><span class="operator">(</span><span class="cons_SimpleSort"><a href="#NativeType_13_5" id="NativeType_41_56" title="Defined at line 13"><span class="token sort_Id">NativeType</span></a></span><span class="operator">)</span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="#NCFunctionReturn_15_5" id="NCFunctionReturn_41_70" title="Defined at line 15"><span class="token sort_Id">NCFunctionReturn</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#NCFunction_14_5" id="NCFunction_41_90" title="Defined at line 14"><span class="token sort_Id">NCFunction</span></a></span></span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/webdsl-native.stx/#NCFunctionReturn_84_77" id="NCFunctionReturn_42_5" title="Referenced at ../../../../trans/static-semantics/webdsl-native.stx line 84, 89"><span class="token sort_Id">NCFunctionReturn</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#NativeType_13_5" id="NativeType_42_24" title="Defined at line 13"><span class="token sort_Id">NativeType</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#NCFunctionReturn_15_5" id="NCFunctionReturn_42_38" title="Defined at line 15"><span class="token sort_Id">NCFunctionReturn</span></a></span></span>
    <span class="cons_OpDecl"><span id="NCFunctionReturnNone_43_5" title="Not referenced"><span class="token sort_Id">NCFunctionReturnNone</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#NCFunctionReturn_15_5" id="NCFunctionReturn_43_28" title="Defined at line 15"><span class="token sort_Id">NCFunctionReturn</span></a></span></span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/webdsl-native.stx/#NCFunctionStatic_84_48" id="NCFunctionStatic_44_5" title="Referenced at ../../../../trans/static-semantics/webdsl-native.stx line 84"><span class="token sort_Id">NCFunctionStatic</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#NCFunctionStatic_16_5" id="NCFunctionStatic_44_24" title="Defined at line 16"><span class="token sort_Id">NCFunctionStatic</span></a></span></span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/webdsl-native.stx/#NCFunctionStaticNone_89_48" id="NCFunctionStaticNone_45_5" title="Referenced at ../../../../trans/static-semantics/webdsl-native.stx line 89"><span class="token sort_Id">NCFunctionStaticNone</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#NCFunctionStatic_16_5" id="NCFunctionStatic_45_28" title="Defined at line 16"><span class="token sort_Id">NCFunctionStatic</span></a></span></span>
    <span class="cons_OpDecl"><button class="modal-open" id="NCFunctionFromStatic_46_5" title="Multi-file references" data-urls="../../../../trans/static-semantics/webdsl-native.stx/#NCFunctionFromStatic_78_64 line 78; ../../../../trans/static-semantics/types/type-extensions.stx/#NCFunctionFromStatic_27_51 line 27"><span class="token sort_Id">NCFunctionFromStatic</span></button> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="../WebDSL-Lexical-sig.stx/#QId_8_5" id="QId_46_28" title="Defined at ../WebDSL-Lexical-sig.stx line 8"><span class="token sort_Id">QId</span></a></span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="#NCFunction_14_5" id="NCFunction_46_34" title="Defined at line 14"><span class="token sort_Id">NCFunction</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#NCFunctionFromStatic_17_5" id="NCFunctionFromStatic_46_48" title="Defined at line 17"><span class="token sort_Id">NCFunctionFromStatic</span></a></span></span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/webdsl-native.stx/#NCFunctionFromStaticElement_78_36" id="NCFunctionFromStaticElement_47_5" title="Referenced at ../../../../trans/static-semantics/webdsl-native.stx line 78"><span class="token sort_Id">NCFunctionFromStaticElement</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#NCFunctionFromStatic_17_5" id="NCFunctionFromStatic_47_35" title="Defined at line 17"><span class="token sort_Id">NCFunctionFromStatic</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#NCElement_12_5" id="NCElement_47_59" title="Defined at line 12"><span class="token sort_Id">NCElement</span></a></span></span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/webdsl-native.stx/#NCConstructor_67_30" id="NCConstructor_48_5" title="Referenced at ../../../../trans/static-semantics/webdsl-native.stx line 67, 99"><span class="token sort_Id">NCConstructor</span></a> <span class="operator">:</span> <span class="keyword">list</span><span class="operator">(</span><span class="cons_SimpleSort"><a href="#NativeType_13_5" id="NativeType_48_26" title="Defined at line 13"><span class="token sort_Id">NativeType</span></a></span><span class="operator">)</span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#NCElement_12_5" id="NCElement_48_41" title="Defined at line 12"><span class="token sort_Id">NCElement</span></a></span></span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/webdsl-native.stx/#NCConstructorFromStatic_68_30" id="NCConstructorFromStatic_49_5" title="Referenced at ../../../../trans/static-semantics/webdsl-native.stx line 68, 103"><span class="token sort_Id">NCConstructorFromStatic</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="../WebDSL-Lexical-sig.stx/#QId_8_5" id="QId_49_31" title="Defined at ../WebDSL-Lexical-sig.stx line 8"><span class="token sort_Id">QId</span></a></span> <span class="operator">*</span> <span class="keyword">list</span><span class="operator">(</span><span class="cons_SimpleSort"><a href="#NativeType_13_5" id="NativeType_49_42" title="Defined at line 13"><span class="token sort_Id">NativeType</span></a></span><span class="operator">)</span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#NCElement_12_5" id="NCElement_49_57" title="Defined at line 12"><span class="token sort_Id">NCElement</span></a></span></span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/webdsl-native.stx/#NativeGenericType_120_23" id="NativeGenericType_50_5" title="Referenced at ../../../../trans/static-semantics/webdsl-native.stx line 120, 121, 122"><span class="token sort_Id">NativeGenericType</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="../WebDSL-Lexical-sig.stx/#Id_14_5" id="Id_50_25" title="Defined at ../WebDSL-Lexical-sig.stx line 14"><span class="token sort_Id">Id</span></a></span> <span class="operator">*</span> <span class="keyword">list</span><span class="operator">(</span><span class="cons_SimpleSort"><a href="#NativeType_13_5" id="NativeType_50_35" title="Defined at line 13"><span class="token sort_Id">NativeType</span></a></span><span class="operator">)</span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#NativeType_13_5" id="NativeType_50_50" title="Defined at line 13"><span class="token sort_Id">NativeType</span></a></span></span>
    <span class="cons_OpDecl"><span id="NativeGenericTypeList_51_5" title="Not referenced"><span class="token sort_Id">NativeGenericTypeList</span></span> <span class="operator">:</span> <span class="keyword">list</span><span class="operator">(</span><span class="cons_SimpleSort"><a href="#NativeType_13_5" id="NativeType_51_34" title="Defined at line 13"><span class="token sort_Id">NativeType</span></a></span><span class="operator">)</span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#NativeType_13_5" id="NativeType_51_49" title="Defined at line 13"><span class="token sort_Id">NativeType</span></a></span></span>
    <span class="cons_OpDecl"><span id="NativeGenericTypeSet_52_5" title="Not referenced"><span class="token sort_Id">NativeGenericTypeSet</span></span> <span class="operator">:</span> <span class="keyword">list</span><span class="operator">(</span><span class="cons_SimpleSort"><a href="#NativeType_13_5" id="NativeType_52_33" title="Defined at line 13"><span class="token sort_Id">NativeType</span></a></span><span class="operator">)</span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#NativeType_13_5" id="NativeType_52_48" title="Defined at line 13"><span class="token sort_Id">NativeType</span></a></span></span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/webdsl-native.stx/#NativeSimpleType_119_23" id="NativeSimpleType_53_5" title="Referenced at ../../../../trans/static-semantics/webdsl-native.stx line 119"><span class="token sort_Id">NativeSimpleType</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="../WebDSL-Lexical-sig.stx/#Id_14_5" id="Id_53_24" title="Defined at ../WebDSL-Lexical-sig.stx line 14"><span class="token sort_Id">Id</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#NativeType_13_5" id="NativeType_53_30" title="Defined at line 13"><span class="token sort_Id">NativeType</span></a></span></span>
</code></pre></td></tr></tbody></table></div>

<div id="modal">
  <div id="modal-content">
    <span id="modal-close">&times;</span>
    <h2 id="modal-h2"></h2>
    <p  id="modal-p"></p>
    <ul id="modal-ul"></ul>
  </div>
</div>
