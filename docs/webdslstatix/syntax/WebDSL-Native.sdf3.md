---
title: WebDSL-Native.sdf3
hide:
  - toc
---

# `WebDSL-Native.sdf3`

:simple-github: [pdmosses/webdsl-statix/webdslstatix/syntax/WebDSL-Native.sdf3]

[pdmosses/webdsl-statix/webdslstatix/syntax/WebDSL-Native.sdf3]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/syntax/WebDSL-Native.sdf3 "The source file on GitHub"

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
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <button class="modal-open" id="WebDSL-Native_1_8" title="Multi-file references" data-urls="../webdsl-statix.sdf3/#WebDSL-Native_18_3 line 18; ../WebDSL-Type.sdf3/#WebDSL-Native_7_3 line 7">WebDSL-Native</button>

<span class="keyword">imports</span>
  <a href="../WebDSL-Core.sdf3/#WebDSL-Core_1_8" id="WebDSL-Core_4_3" title="Defined at ../WebDSL-Core.sdf3 line 1">WebDSL-Core</a>
  <a href="../WebDSL-Lexical.sdf3/#WebDSL-Lexical_1_8" id="WebDSL-Lexical_5_3" title="Defined at ../WebDSL-Lexical.sdf3 line 1">WebDSL-Lexical</a>

<span class="keyword">context-free sorts</span>

  <a href="#NCAlias_14_25" id="NCAlias_9_3" title="Referenced at line 14, 20">NCAlias</a> <a href="#NCSuper_14_35" id="NCSuper_9_11" title="Referenced at line 14">NCSuper</a>

<span class="keyword">context-free syntax</span>

  <span id="Definition_13_3" title="Not referenced">Definition</span>.<span class="cons_Constructor"><span id="NativeClass_13_14" title="Not referenced">NativeClass</span></span> = &lt;
    <span class="cons_String">native</span> <span class="cons_String">class</span> &lt;<a href="../WebDSL-Lexical.sdf3/#QId_5_3" id="QId_14_19" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 9, 10">QId</a>&gt; &lt;<a href="#NCAlias_9_3" id="NCAlias_14_25" title="Defined at line 9, 25, 26">NCAlias</a>&gt; &lt;<a href="#NCSuper_9_11" id="NCSuper_14_35" title="Defined at line 9, 27, 28">NCSuper</a>&gt; <span class="cons_String">{</span>
      &lt;<a href="#NCElement_32_3" id="NCElement_15_8" title="Defined at line 32, 37, 40, 51, 52, 55, 63">NCElement</a>*&gt;
    <span class="cons_String">}</span>
  &gt;

  <span id="Definition_19_3" title="Not referenced">Definition</span>.<span class="cons_Constructor"><span id="ExtendNativeClass_19_14" title="Not referenced">ExtendNativeClass</span></span> = &lt;
    <span class="cons_String">extend</span> <span class="cons_String">native</span> <span class="cons_String">class</span> &lt;<a href="../WebDSL-Lexical.sdf3/#QId_5_3" id="QId_20_26" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 9, 10">QId</a>&gt; &lt;<a href="#NCAlias_9_3" id="NCAlias_20_32" title="Defined at line 9, 25, 26">NCAlias</a>&gt; <span class="cons_String">{</span>
      &lt;<a href="#NCElement_32_3" id="NCElement_21_8" title="Defined at line 32, 37, 40, 51, 52, 55, 63">NCElement</a>*&gt;
    <span class="cons_String">}</span>
  &gt;

  <a href="#NCAlias_14_25" id="NCAlias_25_3" title="Referenced at line 14, 20">NCAlias</a>.<span class="cons_Constructor"><span id="NCAlias_25_11" title="Not referenced">NCAlias</span></span> = &lt;<span class="cons_String">as</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_25_26" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt;&gt;
  <a href="#NCAlias_14_25" id="NCAlias_26_3" title="Referenced at line 14, 20">NCAlias</a>.<span class="cons_Constructor"><span id="NCAliasNone_26_11" title="Not referenced">NCAliasNone</span></span> = &lt;&gt;
  <a href="#NCSuper_14_35" id="NCSuper_27_3" title="Referenced at line 14">NCSuper</a>.<span class="cons_Constructor"><span id="NCSuper_27_11" title="Not referenced">NCSuper</span></span> = &lt;<span class="cons_String">:</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_27_25" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt;&gt;
  <a href="#NCSuper_14_35" id="NCSuper_28_3" title="Referenced at line 14">NCSuper</a>.<span class="cons_Constructor"><span id="NCSuperNone_28_11" title="Not referenced">NCSuperNone</span></span> = &lt;&gt;

<span class="keyword">context-free sorts</span>

  <a href="#NCElement_15_8" id="NCElement_32_3" title="Referenced at line 15, 21">NCElement</a> <a href="#NativeType_38_13" id="NativeType_32_13" title="Referenced at line 38, 42, 44, 53, 56, 58, 59, 60, 63">NativeType</a> <button class="modal-open" id="NCFunction_32_24" title="Multi-file references" data-urls="#NCFunction_40_33 line 40, 49; ../WebDSL-Type.sdf3/#NCFunction_22_30 line 22">NCFunction</button> <a href="#NCFunctionReturn_42_63" id="NCFunctionReturn_32_35" title="Referenced at line 42, 63">NCFunctionReturn</a>
  <a href="#NCFunctionStatic_42_6" id="NCFunctionStatic_33_3" title="Referenced at line 42">NCFunctionStatic</a> <button class="modal-open" id="NCFunctionFromStatic_33_20" title="Multi-file references" data-urls="#NCFunctionFromStatic_51_43 line 51; ../WebDSL-Type.sdf3/#NCFunctionFromStatic_24_40 line 24">NCFunctionFromStatic</button>

<span class="keyword">context-free syntax</span>

  <a href="#NCElement_15_8" id="NCElement_37_3" title="Referenced at line 15, 21">NCElement</a>.<span class="cons_Constructor"><span id="NCProperty_37_13" title="Not referenced">NCProperty</span></span> = &lt;
    &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_38_6" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; <span class="cons_String">:</span> &lt;<a href="#NativeType_32_13" id="NativeType_38_13" title="Defined at line 32, 58, 59, 60, 61">NativeType</a>&gt;
  &gt;
  <a href="#NCElement_15_8" id="NCElement_40_3" title="Referenced at line 15, 21">NCElement</a>.<span class="cons_Constructor"><span id="NCFunctionElement_40_13" title="Not referenced">NCFunctionElement</span></span> = <a href="#NCFunction_32_24" id="NCFunction_40_33" title="Defined at line 32, 41">NCFunction</a>
  <button class="modal-open" id="NCFunction_41_3" title="Multi-file references" data-urls="#NCFunction_40_33 line 40, 49; ../WebDSL-Type.sdf3/#NCFunction_22_30 line 22">NCFunction</button>.<span class="cons_Constructor"><span id="NCFunction_41_14" title="Not referenced">NCFunction</span></span> = &lt;
    &lt;<a href="#NCFunctionStatic_33_3" id="NCFunctionStatic_42_6" title="Defined at line 33, 46, 47">NCFunctionStatic</a>&gt; &lt;<a href="#NativeFunId_67_3" id="NativeFunId_42_25" title="Defined at line 67, 71, 72">NativeFunId</a>&gt; <span class="cons_String">(</span> &lt;{<a href="#NativeType_32_13" id="NativeType_42_42" title="Defined at line 32, 58, 59, 60, 61">NativeType</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span> &lt;<a href="#NCFunctionReturn_32_35" id="NCFunctionReturn_42_63" title="Defined at line 32, 44, 45">NCFunctionReturn</a>&gt;
  &gt;
  <a href="#NCFunctionReturn_42_63" id="NCFunctionReturn_44_3" title="Referenced at line 42, 63">NCFunctionReturn</a>.<span class="cons_Constructor"><span id="NCFunctionReturn_44_20" title="Not referenced">NCFunctionReturn</span></span> = &lt;<span class="cons_String">:</span> &lt;<a href="#NativeType_32_13" id="NativeType_44_43" title="Defined at line 32, 58, 59, 60, 61">NativeType</a>&gt;&gt;
  <a href="#NCFunctionReturn_42_63" id="NCFunctionReturn_45_3" title="Referenced at line 42, 63">NCFunctionReturn</a>.<span class="cons_Constructor"><span id="NCFunctionReturnNone_45_20" title="Not referenced">NCFunctionReturnNone</span></span> = &lt;&gt;
  <a href="#NCFunctionStatic_42_6" id="NCFunctionStatic_46_3" title="Referenced at line 42">NCFunctionStatic</a>.<span class="cons_Constructor"><span id="NCFunctionStatic_46_20" title="Not referenced">NCFunctionStatic</span></span> = &lt;<span class="cons_String">static</span>&gt;
  <a href="#NCFunctionStatic_42_6" id="NCFunctionStatic_47_3" title="Referenced at line 42">NCFunctionStatic</a>.<span class="cons_Constructor"><span id="NCFunctionStaticNone_47_20" title="Not referenced">NCFunctionStaticNone</span></span> = &lt;&gt;
  <button class="modal-open" id="NCFunctionFromStatic_48_3" title="Multi-file references" data-urls="#NCFunctionFromStatic_51_43 line 51; ../WebDSL-Type.sdf3/#NCFunctionFromStatic_24_40 line 24">NCFunctionFromStatic</button>.<span class="cons_Constructor"><span id="NCFunctionFromStatic_48_24" title="Not referenced">NCFunctionFromStatic</span></span> = &lt;
    &lt;<a href="../WebDSL-Lexical.sdf3/#QId_5_3" id="QId_49_6" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 9, 10">QId</a>&gt; <span class="cons_String">as</span> &lt;<a href="#NCFunction_32_24" id="NCFunction_49_15" title="Defined at line 32, 41">NCFunction</a>&gt;
  &gt;
  <a href="#NCElement_15_8" id="NCElement_51_3" title="Referenced at line 15, 21">NCElement</a>.<span class="cons_Constructor"><span id="NCFunctionFromStaticElement_51_13" title="Not referenced">NCFunctionFromStaticElement</span></span> = <a href="#NCFunctionFromStatic_33_20" id="NCFunctionFromStatic_51_43" title="Defined at line 33, 48">NCFunctionFromStatic</a>
  <a href="#NCElement_15_8" id="NCElement_52_3" title="Referenced at line 15, 21">NCElement</a>.<span class="cons_Constructor"><span id="NCConstructor_52_13" title="Not referenced">NCConstructor</span></span> = &lt;
    <span class="cons_String">constructor</span> <span class="cons_String">(</span> &lt;{<a href="#NativeType_32_13" id="NativeType_53_21" title="Defined at line 32, 58, 59, 60, 61">NativeType</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span>
  &gt;
  <a href="#NCElement_15_8" id="NCElement_55_3" title="Referenced at line 15, 21">NCElement</a>.<span class="cons_Constructor"><span id="NCConstructorFromStatic_55_13" title="Not referenced">NCConstructorFromStatic</span></span> = &lt;
    &lt;<a href="../WebDSL-Lexical.sdf3/#QId_5_3" id="QId_56_6" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 9, 10">QId</a>&gt; <span class="cons_String">as</span> <span class="cons_String">constructor</span> <span class="cons_String">(</span> &lt;{<a href="#NativeType_32_13" id="NativeType_56_30" title="Defined at line 32, 58, 59, 60, 61">NativeType</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span>
  &gt;
  <a href="#NativeType_38_13" id="NativeType_58_3" title="Referenced at line 38, 42, 44, 53, 56, 58, 59, 60, 63">NativeType</a>.<span class="cons_Constructor"><span id="NativeGenericType_58_14" title="Not referenced">NativeGenericType</span></span> = &lt;&lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_58_36" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; \&lt; &lt;{<a href="#NativeType_32_13" id="NativeType_58_45" title="Defined at line 32, 58, 59, 60, 61">NativeType</a> <span class="cons_Lit">","</span>}*&gt; \&gt;&gt;
  <a href="#NativeType_38_13" id="NativeType_59_3" title="Referenced at line 38, 42, 44, 53, 56, 58, 59, 60, 63">NativeType</a>.<span class="cons_Constructor"><span id="NativeGenericTypeList_59_14" title="Not referenced">NativeGenericTypeList</span></span> = &lt;<span class="cons_String">[</span> &lt;{<a href="#NativeType_32_13" id="NativeType_59_43" title="Defined at line 32, 58, 59, 60, 61">NativeType</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">]</span>&gt;
  <a href="#NativeType_38_13" id="NativeType_60_3" title="Referenced at line 38, 42, 44, 53, 56, 58, 59, 60, 63">NativeType</a>.<span class="cons_Constructor"><span id="NativeGenericTypeSet_60_14" title="Not referenced">NativeGenericTypeSet</span></span> = &lt;<span class="cons_String">{</span> &lt;{<a href="#NativeType_32_13" id="NativeType_60_42" title="Defined at line 32, 58, 59, 60, 61">NativeType</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">}</span>&gt;
  <a href="#NativeType_38_13" id="NativeType_61_3" title="Referenced at line 38, 42, 44, 53, 56, 58, 59, 60, 63">NativeType</a>.<span class="cons_Constructor"><span id="NativeSimpleType_61_14" title="Not referenced">NativeSimpleType</span></span> = <a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_61_33" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>

  <a href="#NCElement_15_8" id="NCElement_63_3" title="Referenced at line 15, 21">NCElement</a> = &lt;<span class="cons_String">constructor</span> <span class="cons_String">(</span> &lt;{<a href="#NativeType_32_13" id="NativeType_63_32" title="Defined at line 32, 58, 59, 60, 61">NativeType</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span> &lt;<a href="#NCFunctionReturn_32_35" id="NCFunctionReturn_63_53" title="Defined at line 32, 44, 45">NCFunctionReturn</a>&gt;&gt; {<span class="keyword">reject</span>}

<span class="keyword">lexical sorts</span>

  <a href="#NativeFunId_42_25" id="NativeFunId_67_3" title="Referenced at line 42">NativeFunId</a>

<span class="keyword">lexical syntax</span>

  <a href="#NativeFunId_42_25" id="NativeFunId_71_3" title="Referenced at line 42">NativeFunId</a> = <a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_71_17" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>
  <a href="#NativeFunId_42_25" id="NativeFunId_72_3" title="Referenced at line 42">NativeFunId</a> = <span class="cons_Lit">"constructor"</span> {<span class="keyword">reject</span>}

</code></pre></td></tr></tbody></table></div>

<div id="modal">
  <div id="modal-content">
    <span id="modal-close">&times;</span>
    <h2 id="modal-h2"></h2>
    <p  id="modal-p"></p>
    <ul id="modal-ul"></ul>
  </div>
</div>
