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
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl-statix.sdf3/#WebDSL-Dispatch_11_3" id="WebDSL-Dispatch_1_8" title="Referenced at ../webdsl-statix.sdf3 line 11">WebDSL-Dispatch</a>

<span class="keyword">imports</span>
  <a href="../WebDSL-Action.sdf3/#WebDSL-Action_1_8" id="WebDSL-Action_4_3" title="Defined at ../WebDSL-Action.sdf3 line 1">WebDSL-Action</a>
  <a href="../WebDSL-Core.sdf3/#WebDSL-Core_1_8" id="WebDSL-Core_5_3" title="Defined at ../WebDSL-Core.sdf3 line 1">WebDSL-Core</a>
  <a href="../WebDSL-Lexical.sdf3/#WebDSL-Lexical_1_8" id="WebDSL-Lexical_6_3" title="Defined at ../WebDSL-Lexical.sdf3 line 1">WebDSL-Lexical</a>
  <a href="../WebDSL-UI.sdf3/#WebDSL-UI_1_8" id="WebDSL-UI_7_3" title="Defined at ../WebDSL-UI.sdf3 line 1">WebDSL-UI</a>

<span class="keyword">context-free sorts</span>

  <a href="#DispatchEntry_17_8" id="DispatchEntry_11_3" title="Referenced at line 17">DispatchEntry</a> <a href="#DispatchDefault_18_8" id="DispatchDefault_11_17" title="Referenced at line 18">DispatchDefault</a> <a href="#DispatchNavigateCall_39_18" id="DispatchNavigateCall_11_33" title="Referenced at line 39, 44, 49">DispatchNavigateCall</a> <a href="#DispatchNavigate_36_21" id="DispatchNavigate_11_54" title="Referenced at line 36">DispatchNavigate</a> <a href="#DispatchNavigateButton_37_21" id="DispatchNavigateButton_11_71" title="Referenced at line 37">DispatchNavigateButton</a>

<span class="keyword">context-free syntax</span>

  <a href="#TemplateElement_21_31" id="TemplateElement_15_3" title="Referenced at line 21, 24, 27, 30, 33, 34, 40, 49">TemplateElement</a>.<span class="cons_Constructor"><span id="Dispatch_15_19" title="Not referenced">Dispatch</span></span> = &lt;
    <span class="cons_String">dispatch</span> <span class="cons_String">{</span>
      &lt;<a href="#DispatchEntry_11_3" id="DispatchEntry_17_8" title="Defined at line 11, 23, 26, 33, 34">DispatchEntry</a>*&gt;
      &lt;<a href="#DispatchDefault_11_17" id="DispatchDefault_18_8" title="Defined at line 11, 29, 32">DispatchDefault</a>&gt;
    <span class="cons_String">}</span>
  &gt;
  <span id="TemplateCall_21_3" title="Not referenced">TemplateCall</span> = &lt;<span class="cons_String">dispatch</span> <span class="cons_String">{</span> &lt;<a href="#TemplateElement_15_3" id="TemplateElement_21_31" title="Defined at line 15, 36, 37">TemplateElement</a>*&gt; <span class="cons_String">}</span>&gt; {<span class="keyword">reject</span>}

  <a href="#DispatchEntry_17_8" id="DispatchEntry_23_3" title="Referenced at line 17">DispatchEntry</a>.<span class="cons_Constructor"><span id="DispatchEntry_23_17" title="Not referenced">DispatchEntry</span></span> = &lt;
    &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_24_6" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; &lt;<a href="../WebDSL-Core.sdf3/#OptFormalArgs_10_13" id="OptFormalArgs_24_11" title="Defined at ../WebDSL-Core.sdf3 line 10, 37, 38">OptFormalArgs</a>&gt; <span class="cons_String">{</span> &lt;<a href="#TemplateElement_15_3" id="TemplateElement_24_29" title="Defined at line 15, 36, 37">TemplateElement</a>*&gt; <span class="cons_String">}</span>
  &gt;
  <a href="#DispatchEntry_17_8" id="DispatchEntry_26_3" title="Referenced at line 17">DispatchEntry</a>.<span class="cons_Constructor"><span id="DispatchEntity_26_17" title="Not referenced">DispatchEntity</span></span> = &lt;
    &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_27_6" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; <span class="cons_String">:</span> &lt;<a href="../WebDSL-UI.sdf3/#Sort_464_3" id="Sort_27_13" title="Defined at ../WebDSL-UI.sdf3 line 464">Sort</a>&gt; <span class="cons_String">{</span> &lt;<a href="#TemplateElement_15_3" id="TemplateElement_27_22" title="Defined at line 15, 36, 37">TemplateElement</a>*&gt; <span class="cons_String">}</span>
  &gt;
  <a href="#DispatchDefault_18_8" id="DispatchDefault_29_3" title="Referenced at line 18">DispatchDefault</a>.<span class="cons_Constructor"><span id="DispatchDefault_29_19" title="Not referenced">DispatchDefault</span></span> = &lt;
    <span class="cons_String">default</span> <span class="cons_String">{</span> &lt;<a href="#TemplateElement_15_3" id="TemplateElement_30_16" title="Defined at line 15, 36, 37">TemplateElement</a>*&gt; <span class="cons_String">}</span>
  &gt;
  <a href="#DispatchDefault_18_8" id="DispatchDefault_32_3" title="Referenced at line 18">DispatchDefault</a>.<span class="cons_Constructor"><span id="DispatchDefaultNone_32_19" title="Not referenced">DispatchDefaultNone</span></span> = &lt;&gt;
  <a href="#DispatchEntry_17_8" id="DispatchEntry_33_3" title="Referenced at line 17">DispatchEntry</a> = &lt;<span class="cons_String">default</span> <span class="cons_String">(</span> &lt;{<a href="../WebDSL-Core.sdf3/#FormalArg_10_3" id="FormalArg_33_32" title="Defined at ../WebDSL-Core.sdf3 line 10, 36">FormalArg</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span> <span class="cons_String">{</span> &lt;<a href="#TemplateElement_15_3" id="TemplateElement_33_54" title="Defined at line 15, 36, 37">TemplateElement</a>*&gt; <span class="cons_String">}</span>&gt; {<span class="keyword">reject</span>}
  <a href="#DispatchEntry_17_8" id="DispatchEntry_34_3" title="Referenced at line 17">DispatchEntry</a> = &lt;<span class="cons_String">default</span> <span class="cons_String">{</span> &lt;<a href="#TemplateElement_15_3" id="TemplateElement_34_31" title="Defined at line 15, 36, 37">TemplateElement</a>*&gt; <span class="cons_String">}</span>&gt; {<span class="keyword">reject</span>}

  <a href="#TemplateElement_21_31" id="TemplateElement_36_3" title="Referenced at line 21, 24, 27, 30, 33, 34, 40, 49">TemplateElement</a> = <a href="#DispatchNavigate_11_54" id="DispatchNavigate_36_21" title="Defined at line 11, 38, 49">DispatchNavigate</a>
  <a href="#TemplateElement_21_31" id="TemplateElement_37_3" title="Referenced at line 21, 24, 27, 30, 33, 34, 40, 49">TemplateElement</a> = <a href="#DispatchNavigateButton_11_71" id="DispatchNavigateButton_37_21" title="Defined at line 11, 43">DispatchNavigateButton</a>
  <a href="#DispatchNavigate_36_21" id="DispatchNavigate_38_3" title="Referenced at line 36">DispatchNavigate</a>.<span class="cons_Constructor"><span id="DispatchNavigate_38_20" title="Not referenced">DispatchNavigate</span></span> = &lt;
    <span class="cons_String">navigate</span> <span class="cons_String">(</span> &lt;{<a href="#DispatchNavigateCall_11_33" id="DispatchNavigateCall_39_18" title="Defined at line 11, 46, 47">DispatchNavigateCall</a> <span class="cons_Lit">"/"</span>}+&gt; <span class="cons_String">)</span> <span class="cons_String">{</span>
      &lt;<a href="#TemplateElement_15_3" id="TemplateElement_40_8" title="Defined at line 15, 36, 37">TemplateElement</a>*&gt;
    <span class="cons_String">}</span>
  &gt;
  <a href="#DispatchNavigateButton_37_21" id="DispatchNavigateButton_43_3" title="Referenced at line 37">DispatchNavigateButton</a>.<span class="cons_Constructor"><span id="DispatchNavigateButton_43_26" title="Not referenced">DispatchNavigateButton</span></span> = &lt;
    <span class="cons_String">navigate</span> <span class="cons_String">(</span> &lt;<a href="../WebDSL-Action.sdf3/#Exp_34_3" id="Exp_44_17" title="Defined at ../WebDSL-Action.sdf3 line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt; <span class="cons_String">,</span> &lt;{<a href="#DispatchNavigateCall_11_33" id="DispatchNavigateCall_44_26" title="Defined at line 11, 46, 47">DispatchNavigateCall</a> <span class="cons_Lit">"/"</span>}+&gt; <span class="cons_String">)</span>
  &gt;
  <a href="#DispatchNavigateCall_39_18" id="DispatchNavigateCall_46_3" title="Referenced at line 39, 44, 49">DispatchNavigateCall</a>.<span class="cons_Constructor"><span id="DispatchNavigateCall_46_24" title="Not referenced">DispatchNavigateCall</span></span> = &lt;&lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_46_49" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; <span class="cons_String">(</span> &lt;{<a href="../WebDSL-Action.sdf3/#Exp_34_3" id="Exp_46_57" title="Defined at ../WebDSL-Action.sdf3 line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span>&gt;
  <a href="#DispatchNavigateCall_39_18" id="DispatchNavigateCall_47_3" title="Referenced at line 39, 44, 49">DispatchNavigateCall</a>.<span class="cons_Constructor"><span id="DispatchNavigateCallNoArg_47_24" title="Not referenced">DispatchNavigateCallNoArg</span></span> = <a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_47_52" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>

  <a href="#DispatchNavigate_36_21" id="DispatchNavigate_49_3" title="Referenced at line 36">DispatchNavigate</a> = &lt;<span class="cons_String">navigate</span> <span class="cons_String">(</span> &lt;<a href="#DispatchNavigateCall_11_33" id="DispatchNavigateCall_49_35" title="Defined at line 11, 46, 47">DispatchNavigateCall</a>&gt; <span class="cons_String">)</span> <span class="cons_String">{</span> &lt;<a href="#TemplateElement_15_3" id="TemplateElement_49_62" title="Defined at line 15, 36, 37">TemplateElement</a>*&gt; <span class="cons_String">}</span>&gt; {<span class="keyword">reject</span>}

<span class="keyword">lexical syntax</span>

  <span id="TemplateId_53_3" title="Not referenced">TemplateId</span> = <span class="cons_Lit">"navigate"</span> {<span class="keyword">reject</span>}

</code></pre></td></tr></tbody></table></div>

<div id="modal">
  <div id="modal-content">
    <span id="modal-close">&times;</span>
    <h2 id="modal-h2"></h2>
    <p  id="modal-p"></p>
    <ul id="modal-ul"></ul>
  </div>
</div>
