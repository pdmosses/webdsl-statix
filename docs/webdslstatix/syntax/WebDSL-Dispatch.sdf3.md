---
title: WebDSL-Dispatch.sdf3
hide:
  - toc
---

# `WebDSL-Dispatch.sdf3`

:simple-github: [pdmosses/webdsl-statix/webdslstatix/syntax/WebDSL-Dispatch.sdf3]

[pdmosses/webdsl-statix/webdslstatix/syntax/WebDSL-Dispatch.sdf3]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/syntax/WebDSL-Dispatch.sdf3 "The source file on GitHub"

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
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl-statix.sdf3/#WebDSL-Dispatch_162_177" id="WebDSL-Dispatch_7_22" title="Referenced at ../webdsl-statix.sdf3 line 11">WebDSL-Dispatch</a>

<span class="keyword">imports</span>
  <a href="../WebDSL-Action.sdf3/#WebDSL-Action_7_20" id="WebDSL-Action_34_47" title="Defined at ../WebDSL-Action.sdf3 line 1">WebDSL-Action</a>
  <a href="../WebDSL-Core.sdf3/#WebDSL-Core_7_18" id="WebDSL-Core_50_61" title="Defined at ../WebDSL-Core.sdf3 line 1">WebDSL-Core</a>
  <a href="../WebDSL-Lexical.sdf3/#WebDSL-Lexical_7_21" id="WebDSL-Lexical_64_78" title="Defined at ../WebDSL-Lexical.sdf3 line 1">WebDSL-Lexical</a>
  <a href="../WebDSL-UI.sdf3/#WebDSL-UI_7_16" id="WebDSL-UI_81_90" title="Defined at ../WebDSL-UI.sdf3 line 1">WebDSL-UI</a>

<span class="keyword">context-free sorts</span>

  <a href="#DispatchEntry_280_293" id="DispatchEntry_114_127" title="Referenced at line 17">DispatchEntry</a> <a href="#DispatchDefault_303_318" id="DispatchDefault_128_143" title="Referenced at line 18">DispatchDefault</a> <a href="#DispatchNavigateCall_958_978" id="DispatchNavigateCall_144_164" title="Referenced at line 39, 44, 49">DispatchNavigateCall</a> <a href="#DispatchNavigate_841_857" id="DispatchNavigate_165_181" title="Referenced at line 36">DispatchNavigate</a> <a href="#DispatchNavigateButton_878_900" id="DispatchNavigateButton_182_204" title="Referenced at line 37">DispatchNavigateButton</a>

<span class="keyword">context-free syntax</span>

  <a href="#TemplateElement_360_375" id="TemplateElement_229_244" title="Referenced at line 21, 24, 27, 30, 33, 34, 40, 49">TemplateElement</a>.<span class="cons_Constructor"><span id="Dispatch_245_253" title="Not referenced locally, nor via imports">Dispatch</span></span> = &lt;
    <span class="cons_String">dispatch</span> <span class="cons_String">{</span>
      &lt;<a href="#DispatchEntry_114_127" id="DispatchEntry_280_293" title="Defined at line 11, 23, 26, 33, 34">DispatchEntry</a>*&gt;
      &lt;<a href="#DispatchDefault_128_143" id="DispatchDefault_303_318" title="Defined at line 11, 29, 32">DispatchDefault</a>&gt;
    <span class="cons_String">}</span>
  &gt;
  <span id="TemplateCall_332_344" title="Not referenced locally, nor via imports">TemplateCall</span> = &lt;<span class="cons_String">dispatch</span> <span class="cons_String">{</span> &lt;<a href="#TemplateElement_229_244" id="TemplateElement_360_375" title="Defined at line 15, 36, 37">TemplateElement</a>*&gt; <span class="cons_String">}</span>&gt; {<span class="keyword">reject</span>}

  <a href="#DispatchEntry_280_293" id="DispatchEntry_393_406" title="Referenced at line 17">DispatchEntry</a>.<span class="cons_Constructor"><span id="DispatchEntry_407_420" title="Not referenced locally, nor via imports">DispatchEntry</span></span> = &lt;
    &lt;<a href="../WebDSL-Lexical.sdf3/#Id_86_88" id="Id_430_432" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; &lt;<a href="../WebDSL-Core.sdf3/#OptFormalArgs_113_126" id="OptFormalArgs_435_448" title="Defined at ../WebDSL-Core.sdf3 line 10, 37, 38">OptFormalArgs</a>&gt; <span class="cons_String">{</span> &lt;<a href="#TemplateElement_229_244" id="TemplateElement_453_468" title="Defined at line 15, 36, 37">TemplateElement</a>*&gt; <span class="cons_String">}</span>
  &gt;
  <a href="#DispatchEntry_280_293" id="DispatchEntry_479_492" title="Referenced at line 17">DispatchEntry</a>.<span class="cons_Constructor"><span id="DispatchEntity_493_507" title="Not referenced locally, nor via imports">DispatchEntity</span></span> = &lt;
    &lt;<a href="../WebDSL-Lexical.sdf3/#Id_86_88" id="Id_517_519" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; <span class="cons_String">:</span> &lt;<a href="../WebDSL-Core.sdf3/#Sort_195_199" id="Sort_524_528" title="Defined at ../WebDSL-Core.sdf3 line 10, 14, 15, 16, 17, 18, 19, 20">Sort</a>&gt; <span class="cons_String">{</span> &lt;<a href="#TemplateElement_229_244" id="TemplateElement_533_548" title="Defined at line 15, 36, 37">TemplateElement</a>*&gt; <span class="cons_String">}</span>
  &gt;
  <a href="#DispatchDefault_303_318" id="DispatchDefault_559_574" title="Referenced at line 18">DispatchDefault</a>.<span class="cons_Constructor"><span id="DispatchDefault_575_590" title="Not referenced locally, nor via imports">DispatchDefault</span></span> = &lt;
    <span class="cons_String">default</span> <span class="cons_String">{</span> &lt;<a href="#TemplateElement_229_244" id="TemplateElement_610_625" title="Defined at line 15, 36, 37">TemplateElement</a>*&gt; <span class="cons_String">}</span>
  &gt;
  <a href="#DispatchDefault_303_318" id="DispatchDefault_636_651" title="Referenced at line 18">DispatchDefault</a>.<span class="cons_Constructor"><span id="DispatchDefaultNone_652_671" title="Not referenced locally, nor via imports">DispatchDefaultNone</span></span> = &lt;&gt;
  <a href="#DispatchEntry_280_293" id="DispatchEntry_679_692" title="Referenced at line 17">DispatchEntry</a> = &lt;<span class="cons_String">default</span> <span class="cons_String">(</span> &lt;{<a href="../WebDSL-Core.sdf3/#FormalArg_103_112" id="FormalArg_708_717" title="Defined at ../WebDSL-Core.sdf3 line 10, 36">FormalArg</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span> <span class="cons_String">{</span> &lt;<a href="#TemplateElement_229_244" id="TemplateElement_730_745" title="Defined at line 15, 36, 37">TemplateElement</a>*&gt; <span class="cons_String">}</span>&gt; {<span class="keyword">reject</span>}
  <a href="#DispatchEntry_280_293" id="DispatchEntry_762_775" title="Referenced at line 17">DispatchEntry</a> = &lt;<span class="cons_String">default</span> <span class="cons_String">{</span> &lt;<a href="#TemplateElement_229_244" id="TemplateElement_790_805" title="Defined at line 15, 36, 37">TemplateElement</a>*&gt; <span class="cons_String">}</span>&gt; {<span class="keyword">reject</span>}

  <a href="#TemplateElement_360_375" id="TemplateElement_823_838" title="Referenced at line 21, 24, 27, 30, 33, 34, 40, 49">TemplateElement</a> = <a href="#DispatchNavigate_165_181" id="DispatchNavigate_841_857" title="Defined at line 11, 38, 49">DispatchNavigate</a>
  <a href="#TemplateElement_360_375" id="TemplateElement_860_875" title="Referenced at line 21, 24, 27, 30, 33, 34, 40, 49">TemplateElement</a> = <a href="#DispatchNavigateButton_182_204" id="DispatchNavigateButton_878_900" title="Defined at line 11, 43">DispatchNavigateButton</a>
  <a href="#DispatchNavigate_841_857" id="DispatchNavigate_903_919" title="Referenced at line 36">DispatchNavigate</a>.<span class="cons_Constructor"><span id="DispatchNavigate_920_936" title="Not referenced locally, nor via imports">DispatchNavigate</span></span> = &lt;
    <span class="cons_String">navigate</span> <span class="cons_String">(</span> &lt;{<a href="#DispatchNavigateCall_144_164" id="DispatchNavigateCall_958_978" title="Defined at line 11, 46, 47">DispatchNavigateCall</a> <span class="cons_Lit">"/"</span>}+&gt; <span class="cons_String">)</span> <span class="cons_String">{</span>
      &lt;<a href="#TemplateElement_229_244" id="TemplateElement_997_1012" title="Defined at line 15, 36, 37">TemplateElement</a>*&gt;
    <span class="cons_String">}</span>
  &gt;
  <a href="#DispatchNavigateButton_878_900" id="DispatchNavigateButton_1027_1049" title="Referenced at line 37">DispatchNavigateButton</a>.<span class="cons_Constructor"><span id="DispatchNavigateButton_1050_1072" title="Not referenced locally, nor via imports">DispatchNavigateButton</span></span> = &lt;
    <span class="cons_String">navigate</span> <span class="cons_String">(</span> &lt;<a href="../WebDSL-UI.sdf3/#Exp_13248_13251" id="Exp_1093_1096" title="Defined at ../WebDSL-UI.sdf3 line 469, 517">Exp</a>&gt; <span class="cons_String">,</span> &lt;{<a href="#DispatchNavigateCall_144_164" id="DispatchNavigateCall_1102_1122" title="Defined at line 11, 46, 47">DispatchNavigateCall</a> <span class="cons_Lit">"/"</span>}+&gt; <span class="cons_String">)</span>
  &gt;
  <a href="#DispatchNavigateCall_958_978" id="DispatchNavigateCall_1138_1158" title="Referenced at line 39, 44, 49">DispatchNavigateCall</a>.<span class="cons_Constructor"><span id="DispatchNavigateCall_1159_1179" title="Not referenced locally, nor via imports">DispatchNavigateCall</span></span> = &lt;&lt;<a href="../WebDSL-Lexical.sdf3/#Id_86_88" id="Id_1184_1186" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; <span class="cons_String">(</span> &lt;{<a href="../WebDSL-UI.sdf3/#Exp_13248_13251" id="Exp_1192_1195" title="Defined at ../WebDSL-UI.sdf3 line 469, 517">Exp</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span>&gt;
  <a href="#DispatchNavigateCall_958_978" id="DispatchNavigateCall_1208_1228" title="Referenced at line 39, 44, 49">DispatchNavigateCall</a>.<span class="cons_Constructor"><span id="DispatchNavigateCallNoArg_1229_1254" title="Not referenced locally, nor via imports">DispatchNavigateCallNoArg</span></span> = <a href="../WebDSL-Lexical.sdf3/#Id_86_88" id="Id_1257_1259" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>

  <a href="#DispatchNavigate_841_857" id="DispatchNavigate_1263_1279" title="Referenced at line 36">DispatchNavigate</a> = &lt;<span class="cons_String">navigate</span> <span class="cons_String">(</span> &lt;<a href="#DispatchNavigateCall_144_164" id="DispatchNavigateCall_1295_1315" title="Defined at line 11, 46, 47">DispatchNavigateCall</a>&gt; <span class="cons_String">)</span> <span class="cons_String">{</span> &lt;<a href="#TemplateElement_229_244" id="TemplateElement_1322_1337" title="Defined at line 15, 36, 37">TemplateElement</a>*&gt; <span class="cons_String">}</span>&gt; {<span class="keyword">reject</span>}

<span class="keyword">lexical syntax</span>

  <span id="TemplateId_1371_1381" title="Not referenced locally, nor via imports">TemplateId</span> = <span class="cons_Lit">"navigate"</span> {<span class="keyword">reject</span>}

</code></pre></td></tr></tbody></table></div>