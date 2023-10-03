---
title: WebDSL-Native.sdf3
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
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl-statix.sdf3#WebDSL-Native_293_306" id="WebDSL-Native_7_20" title="Referenced at ../webdsl-statix.sdf3 line 18">WebDSL-Native</a>

<span class="keyword">imports</span>
  <a href="../WebDSL-Core.sdf3#WebDSL-Core_7_18" id="WebDSL-Core_32_43" title="Defined at ../WebDSL-Core.sdf3 line 1">WebDSL-Core</a>
  <a href="../WebDSL-Lexical.sdf3#WebDSL-Lexical_7_21" id="WebDSL-Lexical_46_60" title="Defined at ../WebDSL-Lexical.sdf3 line 1">WebDSL-Lexical</a>

<span class="keyword">context-free sorts</span>

  <a href="#NCAlias_292_299" id="NCAlias_84_91" title="Referenced at line 20">NCAlias</a> <a href="#NCSuper_185_192" id="NCSuper_92_99" title="Referenced at line 14">NCSuper</a>

<span class="keyword">context-free syntax</span>

  <span id="Definition_124_134" title="Not referenced locally, nor via imports">Definition</span>.<span class="cons_Constructor"><span id="NativeClass_135_146" title="Not referenced locally, nor via imports">NativeClass</span></span> = &lt;
    <span class="cons_String">native</span> <span class="cons_String">class</span> &lt;<a href="../WebDSL-Lexical.sdf3#QId_40_43" id="QId_169_172" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 9, 10">QId</a>&gt; &lt;<a href="#NCAlias_84_91" id="NCAlias_175_182" title="Defined at line 9, 25, 26">NCAlias</a>&gt; &lt;<a href="#NCSuper_92_99" id="NCSuper_185_192" title="Defined at line 9, 27, 28">NCSuper</a>&gt; <span class="cons_String">{</span>
      &lt;<a href="#NCElement_469_478" id="NCElement_203_212" title="Defined at line 32, 37, 40, 51, 52, 55, 63">NCElement</a>*&gt;
    <span class="cons_String">}</span>
  &gt;

  <span id="Definition_228_238" title="Not referenced locally, nor via imports">Definition</span>.<span class="cons_Constructor"><span id="ExtendNativeClass_239_256" title="Not referenced locally, nor via imports">ExtendNativeClass</span></span> = &lt;
    <span class="cons_String">extend</span> <span class="cons_String">native</span> <span class="cons_String">class</span> &lt;<a href="../WebDSL-Lexical.sdf3#QId_40_43" id="QId_286_289" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 9, 10">QId</a>&gt; &lt;<a href="#NCAlias_84_91" id="NCAlias_292_299" title="Defined at line 9, 25, 26">NCAlias</a>&gt; <span class="cons_String">{</span>
      &lt;<a href="#NCElement_469_478" id="NCElement_310_319" title="Defined at line 32, 37, 40, 51, 52, 55, 63">NCElement</a>*&gt;
    <span class="cons_String">}</span>
  &gt;

  <a href="#NCAlias_292_299" id="NCAlias_335_342" title="Referenced at line 20">NCAlias</a>.<span class="cons_Constructor"><span id="NCAlias_343_350" title="Not referenced locally, nor via imports">NCAlias</span></span> = &lt;<span class="cons_String">as</span> &lt;<a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_358_360" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt;&gt;
  <a href="#NCAlias_292_299" id="NCAlias_365_372" title="Referenced at line 20">NCAlias</a>.<span class="cons_Constructor"><span id="NCAliasNone_373_384" title="Not referenced locally, nor via imports">NCAliasNone</span></span> = &lt;&gt;
  <a href="#NCSuper_185_192" id="NCSuper_392_399" title="Referenced at line 14">NCSuper</a>.<span class="cons_Constructor"><span id="NCSuper_400_407" title="Not referenced locally, nor via imports">NCSuper</span></span> = &lt;<span class="cons_String">:</span> &lt;<a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_414_416" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt;&gt;
  <a href="#NCSuper_185_192" id="NCSuper_421_428" title="Referenced at line 14">NCSuper</a>.<span class="cons_Constructor"><span id="NCSuperNone_429_440" title="Not referenced locally, nor via imports">NCSuperNone</span></span> = &lt;&gt;

<span class="keyword">context-free sorts</span>

  <a href="#NCElement_310_319" id="NCElement_469_478" title="Referenced at line 21">NCElement</a> <a href="#NativeType_1548_1558" id="NativeType_479_489" title="Referenced at line 63">NativeType</a> <a href="#NCFunction_1044_1054" id="NCFunction_490_500" title="Referenced at line 49; ../WebDSL-Type.sdf3 line 22">NCFunction</a> <a href="#NCFunctionReturn_1569_1585" id="NCFunctionReturn_501_517" title="Referenced at line 63">NCFunctionReturn</a>
  <a href="#NCFunctionStatic_711_727" id="NCFunctionStatic_520_536" title="Referenced at line 42">NCFunctionStatic</a> <a href="#NCFunctionFromStatic_1102_1122" id="NCFunctionFromStatic_537_557" title="Referenced at line 51; ../WebDSL-Type.sdf3 line 24">NCFunctionFromStatic</a>

<span class="keyword">context-free syntax</span>

  <a href="#NCElement_310_319" id="NCElement_582_591" title="Referenced at line 21">NCElement</a>.<span class="cons_Constructor"><span id="NCProperty_592_602" title="Not referenced locally, nor via imports">NCProperty</span></span> = &lt;
    &lt;<a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_612_614" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; <span class="cons_String">:</span> &lt;<a href="#NativeType_479_489" id="NativeType_619_629" title="Defined at line 32, 58, 59, 60, 61">NativeType</a>&gt;
  &gt;
  <a href="#NCElement_310_319" id="NCElement_637_646" title="Referenced at line 21">NCElement</a>.<span class="cons_Constructor"><span id="NCFunctionElement_647_664" title="Not referenced locally, nor via imports">NCFunctionElement</span></span> = <a href="#NCFunction_490_500" id="NCFunction_667_677" title="Defined at line 32, 41">NCFunction</a>
  <a href="#NCFunction_1044_1054" id="NCFunction_680_690" title="Referenced at line 49; ../WebDSL-Type.sdf3 line 22">NCFunction</a>.<span class="cons_Constructor"><span id="NCFunction_691_701" title="Not referenced locally, nor via imports">NCFunction</span></span> = &lt;
    &lt;<a href="#NCFunctionStatic_520_536" id="NCFunctionStatic_711_727" title="Defined at line 33, 46, 47">NCFunctionStatic</a>&gt; &lt;<a href="#NativeFunId_1615_1626" id="NativeFunId_730_741" title="Defined at line 67, 71, 72">NativeFunId</a>&gt; <span class="cons_String">(</span> &lt;{<a href="#NativeType_479_489" id="NativeType_747_757" title="Defined at line 32, 58, 59, 60, 61">NativeType</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span> &lt;<a href="#NCFunctionReturn_501_517" id="NCFunctionReturn_768_784" title="Defined at line 32, 44, 45">NCFunctionReturn</a>&gt;
  &gt;
  <a href="#NCFunctionReturn_1569_1585" id="NCFunctionReturn_792_808" title="Referenced at line 63">NCFunctionReturn</a>.<span class="cons_Constructor"><span id="NCFunctionReturn_809_825" title="Not referenced locally, nor via imports">NCFunctionReturn</span></span> = &lt;<span class="cons_String">:</span> &lt;<a href="#NativeType_479_489" id="NativeType_832_842" title="Defined at line 32, 58, 59, 60, 61">NativeType</a>&gt;&gt;
  <a href="#NCFunctionReturn_1569_1585" id="NCFunctionReturn_847_863" title="Referenced at line 63">NCFunctionReturn</a>.<span class="cons_Constructor"><span id="NCFunctionReturnNone_864_884" title="Not referenced locally, nor via imports">NCFunctionReturnNone</span></span> = &lt;&gt;
  <a href="#NCFunctionStatic_711_727" id="NCFunctionStatic_892_908" title="Referenced at line 42">NCFunctionStatic</a>.<span class="cons_Constructor"><span id="NCFunctionStatic_909_925" title="Not referenced locally, nor via imports">NCFunctionStatic</span></span> = &lt;<span class="cons_String">static</span>&gt;
  <a href="#NCFunctionStatic_711_727" id="NCFunctionStatic_939_955" title="Referenced at line 42">NCFunctionStatic</a>.<span class="cons_Constructor"><span id="NCFunctionStaticNone_956_976" title="Not referenced locally, nor via imports">NCFunctionStaticNone</span></span> = &lt;&gt;
  <a href="#NCFunctionFromStatic_1102_1122" id="NCFunctionFromStatic_984_1004" title="Referenced at line 51; ../WebDSL-Type.sdf3 line 24">NCFunctionFromStatic</a>.<span class="cons_Constructor"><span id="NCFunctionFromStatic_1005_1025" title="Not referenced locally, nor via imports">NCFunctionFromStatic</span></span> = &lt;
    &lt;<a href="../WebDSL-Lexical.sdf3#QId_40_43" id="QId_1035_1038" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 9, 10">QId</a>&gt; <span class="cons_String">as</span> &lt;<a href="#NCFunction_490_500" id="NCFunction_1044_1054" title="Defined at line 32, 41">NCFunction</a>&gt;
  &gt;
  <a href="#NCElement_310_319" id="NCElement_1062_1071" title="Referenced at line 21">NCElement</a>.<span class="cons_Constructor"><span id="NCFunctionFromStaticElement_1072_1099" title="Not referenced locally, nor via imports">NCFunctionFromStaticElement</span></span> = <a href="#NCFunctionFromStatic_537_557" id="NCFunctionFromStatic_1102_1122" title="Defined at line 33, 48">NCFunctionFromStatic</a>
  <a href="#NCElement_310_319" id="NCElement_1125_1134" title="Referenced at line 21">NCElement</a>.<span class="cons_Constructor"><span id="NCConstructor_1135_1148" title="Not referenced locally, nor via imports">NCConstructor</span></span> = &lt;
    <span class="cons_String">constructor</span> <span class="cons_String">(</span> &lt;{<a href="#NativeType_479_489" id="NativeType_1173_1183" title="Defined at line 32, 58, 59, 60, 61">NativeType</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span>
  &gt;
  <a href="#NCElement_310_319" id="NCElement_1199_1208" title="Referenced at line 21">NCElement</a>.<span class="cons_Constructor"><span id="NCConstructorFromStatic_1209_1232" title="Not referenced locally, nor via imports">NCConstructorFromStatic</span></span> = &lt;
    &lt;<a href="../WebDSL-Lexical.sdf3#QId_40_43" id="QId_1242_1245" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 9, 10">QId</a>&gt; <span class="cons_String">as</span> <span class="cons_String">constructor</span> <span class="cons_String">(</span> &lt;{<a href="#NativeType_479_489" id="NativeType_1266_1276" title="Defined at line 32, 58, 59, 60, 61">NativeType</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span>
  &gt;
  <a href="#NativeType_1548_1558" id="NativeType_1292_1302" title="Referenced at line 63">NativeType</a>.<span class="cons_Constructor"><span id="NativeGenericType_1303_1320" title="Not referenced locally, nor via imports">NativeGenericType</span></span> = &lt;&lt;<a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_1325_1327" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; \&lt; &lt;{<a href="#NativeType_479_489" id="NativeType_1334_1344" title="Defined at line 32, 58, 59, 60, 61">NativeType</a> <span class="cons_Lit">","</span>}*&gt; \&gt;&gt;
  <a href="#NativeType_1548_1558" id="NativeType_1358_1368" title="Referenced at line 63">NativeType</a>.<span class="cons_Constructor"><span id="NativeGenericTypeList_1369_1390" title="Not referenced locally, nor via imports">NativeGenericTypeList</span></span> = &lt;<span class="cons_String">[</span> &lt;{<a href="#NativeType_479_489" id="NativeType_1398_1408" title="Defined at line 32, 58, 59, 60, 61">NativeType</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">]</span>&gt;
  <a href="#NativeType_1548_1558" id="NativeType_1421_1431" title="Referenced at line 63">NativeType</a>.<span class="cons_Constructor"><span id="NativeGenericTypeSet_1432_1452" title="Not referenced locally, nor via imports">NativeGenericTypeSet</span></span> = &lt;<span class="cons_String">{</span> &lt;{<a href="#NativeType_479_489" id="NativeType_1460_1470" title="Defined at line 32, 58, 59, 60, 61">NativeType</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">}</span>&gt;
  <a href="#NativeType_1548_1558" id="NativeType_1483_1493" title="Referenced at line 63">NativeType</a>.<span class="cons_Constructor"><span id="NativeSimpleType_1494_1510" title="Not referenced locally, nor via imports">NativeSimpleType</span></span> = <a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_1513_1515" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>

  <a href="#NCElement_310_319" id="NCElement_1519_1528" title="Referenced at line 21">NCElement</a> = &lt;<span class="cons_String">constructor</span> <span class="cons_String">(</span> &lt;{<a href="#NativeType_479_489" id="NativeType_1548_1558" title="Defined at line 32, 58, 59, 60, 61">NativeType</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span> &lt;<a href="#NCFunctionReturn_501_517" id="NCFunctionReturn_1569_1585" title="Defined at line 32, 44, 45">NCFunctionReturn</a>&gt;&gt; {<span class="keyword">reject</span>}

<span class="keyword">lexical sorts</span>

  <a href="#NativeFunId_730_741" id="NativeFunId_1615_1626" title="Referenced at line 42">NativeFunId</a>

<span class="keyword">lexical syntax</span>

  <a href="#NativeFunId_730_741" id="NativeFunId_1646_1657" title="Referenced at line 42">NativeFunId</a> = <a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_1660_1662" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>
  <a href="#NativeFunId_730_741" id="NativeFunId_1665_1676" title="Referenced at line 42">NativeFunId</a> = <span class="cons_Lit">"constructor"</span> {<span class="keyword">reject</span>}

</code></pre></td></tr></tbody></table></div>