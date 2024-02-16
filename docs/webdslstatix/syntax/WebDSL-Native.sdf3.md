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
<td class="code"><pre><code><span class="keyword">module</span> <button class="modal-open" id="WebDSL-Native_1_8" title="a definition with multiple references" data-urls="../webdsl-statix.sdf3/#WebDSL-Native line 18_3; ../WebDSL-Type.sdf3/#WebDSL-Native line 7_3">WebDSL-Native</button>

<span class="keyword">imports</span>
  <a href="../WebDSL-Core.sdf3/#WebDSL-Core_1_8" id="WebDSL-Core_4_3" title="a reference to a single-file definition">WebDSL-Core</a>
  <a href="../WebDSL-Lexical.sdf3/#WebDSL-Lexical_1_8" id="WebDSL-Lexical_5_3" title="a reference to a single-file definition">WebDSL-Lexical</a>

<span class="keyword">context-free sorts</span>

  <button class="modal-open" id="NCAlias_9_3" title="a definition with multiple references" data-urls="#NCAlias line 14_25, 20_32">NCAlias</button> <a href="#NCSuper_14_35" id="NCSuper_9_11" title="a definition with a single reference">NCSuper</a>

<span class="keyword">context-free syntax</span>

  <span id="Definition_13_3" title="a definition with no references">Definition</span>.<span class="cons_Constructor"><span id="NativeClass_13_14" title="a definition with no references">NativeClass</span></span> = &lt;
    <span class="cons_String">native</span> <span class="cons_String">class</span> &lt;<a href="../WebDSL-Lexical.sdf3/#QId_5_3" id="QId_14_19" title="a reference to a single-file definition">QId</a>&gt; &lt;<a href="#NCAlias_9_3" id="NCAlias_14_25" title="a reference to a single-file definition">NCAlias</a>&gt; &lt;<a href="#NCSuper_9_11" id="NCSuper_14_35" title="a reference to a single-file definition">NCSuper</a>&gt; <span class="cons_String">{</span>
      &lt;<a href="#NCElement_32_3" id="NCElement_15_8" title="a reference to a single-file definition">NCElement</a>*&gt;
    <span class="cons_String">}</span>
  &gt;

  <span id="Definition_19_3" title="a definition with no references">Definition</span>.<span class="cons_Constructor"><span id="ExtendNativeClass_19_14" title="a definition with no references">ExtendNativeClass</span></span> = &lt;
    <span class="cons_String">extend</span> <span class="cons_String">native</span> <span class="cons_String">class</span> &lt;<a href="../WebDSL-Lexical.sdf3/#QId_5_3" id="QId_20_26" title="a reference to a single-file definition">QId</a>&gt; &lt;<a href="#NCAlias_9_3" id="NCAlias_20_32" title="a reference to a single-file definition">NCAlias</a>&gt; <span class="cons_String">{</span>
      &lt;<a href="#NCElement_32_3" id="NCElement_21_8" title="a reference to a single-file definition">NCElement</a>*&gt;
    <span class="cons_String">}</span>
  &gt;

  <button class="modal-open" id="NCAlias_25_3" title="a definition with multiple references" data-urls="#NCAlias line 14_25, 20_32">NCAlias</button>.<span class="cons_Constructor"><span id="NCAlias_25_11" title="a definition with no references">NCAlias</span></span> = &lt;<span class="cons_String">as</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_25_26" title="a reference to a single-file definition">Id</a>&gt;&gt;
  <button class="modal-open" id="NCAlias_26_3" title="a definition with multiple references" data-urls="#NCAlias line 14_25, 20_32">NCAlias</button>.<span class="cons_Constructor"><span id="NCAliasNone_26_11" title="a definition with no references">NCAliasNone</span></span> = &lt;&gt;
  <a href="#NCSuper_14_35" id="NCSuper_27_3" title="a definition with a single reference">NCSuper</a>.<span class="cons_Constructor"><span id="NCSuper_27_11" title="a definition with no references">NCSuper</span></span> = &lt;<span class="cons_String">:</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_27_25" title="a reference to a single-file definition">Id</a>&gt;&gt;
  <a href="#NCSuper_14_35" id="NCSuper_28_3" title="a definition with a single reference">NCSuper</a>.<span class="cons_Constructor"><span id="NCSuperNone_28_11" title="a definition with no references">NCSuperNone</span></span> = &lt;&gt;

<span class="keyword">context-free sorts</span>

  <button class="modal-open" id="NCElement_32_3" title="a definition with multiple references" data-urls="#NCElement line 15_8, 21_8">NCElement</button> <button class="modal-open" id="NativeType_32_13" title="a definition with multiple references" data-urls="#NativeType line 38_13, 42_42, 44_43, 53_21, 56_30, 58_45, 59_43, 60_42, 63_32">NativeType</button> <button class="modal-open" id="NCFunction_32_24" title="a definition with multiple references" data-urls="#NCFunction line 40_33, 49_15; ../WebDSL-Type.sdf3/#NCFunction line 22_30">NCFunction</button> <button class="modal-open" id="NCFunctionReturn_32_35" title="a definition with multiple references" data-urls="#NCFunctionReturn line 42_63, 63_53">NCFunctionReturn</button>
  <a href="#NCFunctionStatic_42_6" id="NCFunctionStatic_33_3" title="a definition with a single reference">NCFunctionStatic</a> <button class="modal-open" id="NCFunctionFromStatic_33_20" title="a definition with multiple references" data-urls="#NCFunctionFromStatic line 51_43; ../WebDSL-Type.sdf3/#NCFunctionFromStatic line 24_40">NCFunctionFromStatic</button>

<span class="keyword">context-free syntax</span>

  <button class="modal-open" id="NCElement_37_3" title="a definition with multiple references" data-urls="#NCElement line 15_8, 21_8">NCElement</button>.<span class="cons_Constructor"><span id="NCProperty_37_13" title="a definition with no references">NCProperty</span></span> = &lt;
    &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_38_6" title="a reference to a single-file definition">Id</a>&gt; <span class="cons_String">:</span> &lt;<a href="#NativeType_32_13" id="NativeType_38_13" title="a reference to a single-file definition">NativeType</a>&gt;
  &gt;
  <button class="modal-open" id="NCElement_40_3" title="a definition with multiple references" data-urls="#NCElement line 15_8, 21_8">NCElement</button>.<span class="cons_Constructor"><span id="NCFunctionElement_40_13" title="a definition with no references">NCFunctionElement</span></span> = <a href="#NCFunction_32_24" id="NCFunction_40_33" title="a reference to a single-file definition">NCFunction</a>
  <button class="modal-open" id="NCFunction_41_3" title="a definition with multiple references" data-urls="#NCFunction line 40_33, 49_15; ../WebDSL-Type.sdf3/#NCFunction line 22_30">NCFunction</button>.<span class="cons_Constructor"><span id="NCFunction_41_14" title="a definition with no references">NCFunction</span></span> = &lt;
    &lt;<a href="#NCFunctionStatic_33_3" id="NCFunctionStatic_42_6" title="a reference to a single-file definition">NCFunctionStatic</a>&gt; &lt;<a href="#NativeFunId_67_3" id="NativeFunId_42_25" title="a reference to a single-file definition">NativeFunId</a>&gt; <span class="cons_String">(</span> &lt;{<a href="#NativeType_32_13" id="NativeType_42_42" title="a reference to a single-file definition">NativeType</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span> &lt;<a href="#NCFunctionReturn_32_35" id="NCFunctionReturn_42_63" title="a reference to a single-file definition">NCFunctionReturn</a>&gt;
  &gt;
  <button class="modal-open" id="NCFunctionReturn_44_3" title="a definition with multiple references" data-urls="#NCFunctionReturn line 42_63, 63_53">NCFunctionReturn</button>.<span class="cons_Constructor"><span id="NCFunctionReturn_44_20" title="a definition with no references">NCFunctionReturn</span></span> = &lt;<span class="cons_String">:</span> &lt;<a href="#NativeType_32_13" id="NativeType_44_43" title="a reference to a single-file definition">NativeType</a>&gt;&gt;
  <button class="modal-open" id="NCFunctionReturn_45_3" title="a definition with multiple references" data-urls="#NCFunctionReturn line 42_63, 63_53">NCFunctionReturn</button>.<span class="cons_Constructor"><span id="NCFunctionReturnNone_45_20" title="a definition with no references">NCFunctionReturnNone</span></span> = &lt;&gt;
  <a href="#NCFunctionStatic_42_6" id="NCFunctionStatic_46_3" title="a definition with a single reference">NCFunctionStatic</a>.<span class="cons_Constructor"><span id="NCFunctionStatic_46_20" title="a definition with no references">NCFunctionStatic</span></span> = &lt;<span class="cons_String">static</span>&gt;
  <a href="#NCFunctionStatic_42_6" id="NCFunctionStatic_47_3" title="a definition with a single reference">NCFunctionStatic</a>.<span class="cons_Constructor"><span id="NCFunctionStaticNone_47_20" title="a definition with no references">NCFunctionStaticNone</span></span> = &lt;&gt;
  <button class="modal-open" id="NCFunctionFromStatic_48_3" title="a definition with multiple references" data-urls="#NCFunctionFromStatic line 51_43; ../WebDSL-Type.sdf3/#NCFunctionFromStatic line 24_40">NCFunctionFromStatic</button>.<span class="cons_Constructor"><span id="NCFunctionFromStatic_48_24" title="a definition with no references">NCFunctionFromStatic</span></span> = &lt;
    &lt;<a href="../WebDSL-Lexical.sdf3/#QId_5_3" id="QId_49_6" title="a reference to a single-file definition">QId</a>&gt; <span class="cons_String">as</span> &lt;<a href="#NCFunction_32_24" id="NCFunction_49_15" title="a reference to a single-file definition">NCFunction</a>&gt;
  &gt;
  <button class="modal-open" id="NCElement_51_3" title="a definition with multiple references" data-urls="#NCElement line 15_8, 21_8">NCElement</button>.<span class="cons_Constructor"><span id="NCFunctionFromStaticElement_51_13" title="a definition with no references">NCFunctionFromStaticElement</span></span> = <a href="#NCFunctionFromStatic_33_20" id="NCFunctionFromStatic_51_43" title="a reference to a single-file definition">NCFunctionFromStatic</a>
  <button class="modal-open" id="NCElement_52_3" title="a definition with multiple references" data-urls="#NCElement line 15_8, 21_8">NCElement</button>.<span class="cons_Constructor"><span id="NCConstructor_52_13" title="a definition with no references">NCConstructor</span></span> = &lt;
    <span class="cons_String">constructor</span> <span class="cons_String">(</span> &lt;{<a href="#NativeType_32_13" id="NativeType_53_21" title="a reference to a single-file definition">NativeType</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span>
  &gt;
  <button class="modal-open" id="NCElement_55_3" title="a definition with multiple references" data-urls="#NCElement line 15_8, 21_8">NCElement</button>.<span class="cons_Constructor"><span id="NCConstructorFromStatic_55_13" title="a definition with no references">NCConstructorFromStatic</span></span> = &lt;
    &lt;<a href="../WebDSL-Lexical.sdf3/#QId_5_3" id="QId_56_6" title="a reference to a single-file definition">QId</a>&gt; <span class="cons_String">as</span> <span class="cons_String">constructor</span> <span class="cons_String">(</span> &lt;{<a href="#NativeType_32_13" id="NativeType_56_30" title="a reference to a single-file definition">NativeType</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span>
  &gt;
  <button class="modal-open" id="NativeType_58_3" title="a definition with multiple references" data-urls="#NativeType line 38_13, 42_42, 44_43, 53_21, 56_30, 58_45, 59_43, 60_42, 63_32">NativeType</button>.<span class="cons_Constructor"><span id="NativeGenericType_58_14" title="a definition with no references">NativeGenericType</span></span> = &lt;&lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_58_36" title="a reference to a single-file definition">Id</a>&gt; \&lt; &lt;{<a href="#NativeType_32_13" id="NativeType_58_45" title="a reference to a single-file definition">NativeType</a> <span class="cons_Lit">","</span>}*&gt; \&gt;&gt;
  <button class="modal-open" id="NativeType_59_3" title="a definition with multiple references" data-urls="#NativeType line 38_13, 42_42, 44_43, 53_21, 56_30, 58_45, 59_43, 60_42, 63_32">NativeType</button>.<span class="cons_Constructor"><span id="NativeGenericTypeList_59_14" title="a definition with no references">NativeGenericTypeList</span></span> = &lt;<span class="cons_String">[</span> &lt;{<a href="#NativeType_32_13" id="NativeType_59_43" title="a reference to a single-file definition">NativeType</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">]</span>&gt;
  <button class="modal-open" id="NativeType_60_3" title="a definition with multiple references" data-urls="#NativeType line 38_13, 42_42, 44_43, 53_21, 56_30, 58_45, 59_43, 60_42, 63_32">NativeType</button>.<span class="cons_Constructor"><span id="NativeGenericTypeSet_60_14" title="a definition with no references">NativeGenericTypeSet</span></span> = &lt;<span class="cons_String">{</span> &lt;{<a href="#NativeType_32_13" id="NativeType_60_42" title="a reference to a single-file definition">NativeType</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">}</span>&gt;
  <button class="modal-open" id="NativeType_61_3" title="a definition with multiple references" data-urls="#NativeType line 38_13, 42_42, 44_43, 53_21, 56_30, 58_45, 59_43, 60_42, 63_32">NativeType</button>.<span class="cons_Constructor"><span id="NativeSimpleType_61_14" title="a definition with no references">NativeSimpleType</span></span> = <a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_61_33" title="a reference to a single-file definition">Id</a>

  <button class="modal-open" id="NCElement_63_3" title="a definition with multiple references" data-urls="#NCElement line 15_8, 21_8">NCElement</button> = &lt;<span class="cons_String">constructor</span> <span class="cons_String">(</span> &lt;{<a href="#NativeType_32_13" id="NativeType_63_32" title="a reference to a single-file definition">NativeType</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span> &lt;<a href="#NCFunctionReturn_32_35" id="NCFunctionReturn_63_53" title="a reference to a single-file definition">NCFunctionReturn</a>&gt;&gt; {<span class="keyword">reject</span>}

<span class="keyword">lexical sorts</span>

  <a href="#NativeFunId_42_25" id="NativeFunId_67_3" title="a definition with a single reference">NativeFunId</a>

<span class="keyword">lexical syntax</span>

  <a href="#NativeFunId_42_25" id="NativeFunId_71_3" title="a definition with a single reference">NativeFunId</a> = <a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_71_17" title="a reference to a single-file definition">Id</a>
  <a href="#NativeFunId_42_25" id="NativeFunId_72_3" title="a definition with a single reference">NativeFunId</a> = <span class="cons_Lit">"constructor"</span> {<span class="keyword">reject</span>}

</code></pre></td></tr></tbody></table></div>

<div id="modal">
  <div id="modal-content">
    <span id="modal-close">&times;</span>
    <h2 id="modal-h2"></h2>
    <p  id="modal-p"></p>
    <ul id="modal-ul"></ul>
  </div>
</div>
