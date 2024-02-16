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
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl-statix.sdf3/#WebDSL-Dispatch_11_3" id="WebDSL-Dispatch_1_8" title="a definition with a single reference">WebDSL-Dispatch</a>

<span class="keyword">imports</span>
  <a href="../WebDSL-Action.sdf3/#WebDSL-Action_1_8" id="WebDSL-Action_4_3" title="a reference to a single-file definition">WebDSL-Action</a>
  <a href="../WebDSL-Core.sdf3/#WebDSL-Core_1_8" id="WebDSL-Core_5_3" title="a reference to a single-file definition">WebDSL-Core</a>
  <a href="../WebDSL-Lexical.sdf3/#WebDSL-Lexical_1_8" id="WebDSL-Lexical_6_3" title="a reference to a single-file definition">WebDSL-Lexical</a>
  <a href="../WebDSL-UI.sdf3/#WebDSL-UI_1_8" id="WebDSL-UI_7_3" title="a reference to a single-file definition">WebDSL-UI</a>

<span class="keyword">context-free sorts</span>

  <a href="#DispatchEntry_17_8" id="DispatchEntry_11_3" title="a definition with a single reference">DispatchEntry</a> <a href="#DispatchDefault_18_8" id="DispatchDefault_11_17" title="a definition with a single reference">DispatchDefault</a> <button class="modal-open" id="DispatchNavigateCall_11_33" title="a definition with multiple references" data-urls="#DispatchNavigateCall line 39_18, 44_26, 49_35">DispatchNavigateCall</button> <a href="#DispatchNavigate_36_21" id="DispatchNavigate_11_54" title="a definition with a single reference">DispatchNavigate</a> <a href="#DispatchNavigateButton_37_21" id="DispatchNavigateButton_11_71" title="a definition with a single reference">DispatchNavigateButton</a>

<span class="keyword">context-free syntax</span>

  <button class="modal-open" id="TemplateElement_15_3" title="a definition with multiple references" data-urls="#TemplateElement line 21_31, 24_29, 27_22, 30_16, 33_54, 34_31, 40_8, 49_62">TemplateElement</button>.<span class="cons_Constructor"><span id="Dispatch_15_19" title="a definition with no references">Dispatch</span></span> = &lt;
    <span class="cons_String">dispatch</span> <span class="cons_String">{</span>
      &lt;<a href="#DispatchEntry_11_3" id="DispatchEntry_17_8" title="a reference to a single-file definition">DispatchEntry</a>*&gt;
      &lt;<a href="#DispatchDefault_11_17" id="DispatchDefault_18_8" title="a reference to a single-file definition">DispatchDefault</a>&gt;
    <span class="cons_String">}</span>
  &gt;
  <span id="TemplateCall_21_3" title="a definition with no references">TemplateCall</span> = &lt;<span class="cons_String">dispatch</span> <span class="cons_String">{</span> &lt;<a href="#TemplateElement_15_3" id="TemplateElement_21_31" title="a reference to a single-file definition">TemplateElement</a>*&gt; <span class="cons_String">}</span>&gt; {<span class="keyword">reject</span>}

  <a href="#DispatchEntry_17_8" id="DispatchEntry_23_3" title="a definition with a single reference">DispatchEntry</a>.<span class="cons_Constructor"><span id="DispatchEntry_23_17" title="a definition with no references">DispatchEntry</span></span> = &lt;
    &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_24_6" title="a reference to a single-file definition">Id</a>&gt; &lt;<a href="../WebDSL-Core.sdf3/#OptFormalArgs_10_13" id="OptFormalArgs_24_11" title="a reference to a single-file definition">OptFormalArgs</a>&gt; <span class="cons_String">{</span> &lt;<a href="#TemplateElement_15_3" id="TemplateElement_24_29" title="a reference to a single-file definition">TemplateElement</a>*&gt; <span class="cons_String">}</span>
  &gt;
  <a href="#DispatchEntry_17_8" id="DispatchEntry_26_3" title="a definition with a single reference">DispatchEntry</a>.<span class="cons_Constructor"><span id="DispatchEntity_26_17" title="a definition with no references">DispatchEntity</span></span> = &lt;
    &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_27_6" title="a reference to a single-file definition">Id</a>&gt; <span class="cons_String">:</span> &lt;<a href="../WebDSL-UI.sdf3/#Sort_464_3" id="Sort_27_13" title="a reference to a single-file definition">Sort</a>&gt; <span class="cons_String">{</span> &lt;<a href="#TemplateElement_15_3" id="TemplateElement_27_22" title="a reference to a single-file definition">TemplateElement</a>*&gt; <span class="cons_String">}</span>
  &gt;
  <a href="#DispatchDefault_18_8" id="DispatchDefault_29_3" title="a definition with a single reference">DispatchDefault</a>.<span class="cons_Constructor"><span id="DispatchDefault_29_19" title="a definition with no references">DispatchDefault</span></span> = &lt;
    <span class="cons_String">default</span> <span class="cons_String">{</span> &lt;<a href="#TemplateElement_15_3" id="TemplateElement_30_16" title="a reference to a single-file definition">TemplateElement</a>*&gt; <span class="cons_String">}</span>
  &gt;
  <a href="#DispatchDefault_18_8" id="DispatchDefault_32_3" title="a definition with a single reference">DispatchDefault</a>.<span class="cons_Constructor"><span id="DispatchDefaultNone_32_19" title="a definition with no references">DispatchDefaultNone</span></span> = &lt;&gt;
  <a href="#DispatchEntry_17_8" id="DispatchEntry_33_3" title="a definition with a single reference">DispatchEntry</a> = &lt;<span class="cons_String">default</span> <span class="cons_String">(</span> &lt;{<a href="../WebDSL-Core.sdf3/#FormalArg_10_3" id="FormalArg_33_32" title="a reference to a single-file definition">FormalArg</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span> <span class="cons_String">{</span> &lt;<a href="#TemplateElement_15_3" id="TemplateElement_33_54" title="a reference to a single-file definition">TemplateElement</a>*&gt; <span class="cons_String">}</span>&gt; {<span class="keyword">reject</span>}
  <a href="#DispatchEntry_17_8" id="DispatchEntry_34_3" title="a definition with a single reference">DispatchEntry</a> = &lt;<span class="cons_String">default</span> <span class="cons_String">{</span> &lt;<a href="#TemplateElement_15_3" id="TemplateElement_34_31" title="a reference to a single-file definition">TemplateElement</a>*&gt; <span class="cons_String">}</span>&gt; {<span class="keyword">reject</span>}

  <button class="modal-open" id="TemplateElement_36_3" title="a definition with multiple references" data-urls="#TemplateElement line 21_31, 24_29, 27_22, 30_16, 33_54, 34_31, 40_8, 49_62">TemplateElement</button> = <a href="#DispatchNavigate_11_54" id="DispatchNavigate_36_21" title="a reference to a single-file definition">DispatchNavigate</a>
  <button class="modal-open" id="TemplateElement_37_3" title="a definition with multiple references" data-urls="#TemplateElement line 21_31, 24_29, 27_22, 30_16, 33_54, 34_31, 40_8, 49_62">TemplateElement</button> = <a href="#DispatchNavigateButton_11_71" id="DispatchNavigateButton_37_21" title="a reference to a single-file definition">DispatchNavigateButton</a>
  <a href="#DispatchNavigate_36_21" id="DispatchNavigate_38_3" title="a definition with a single reference">DispatchNavigate</a>.<span class="cons_Constructor"><span id="DispatchNavigate_38_20" title="a definition with no references">DispatchNavigate</span></span> = &lt;
    <span class="cons_String">navigate</span> <span class="cons_String">(</span> &lt;{<a href="#DispatchNavigateCall_11_33" id="DispatchNavigateCall_39_18" title="a reference to a single-file definition">DispatchNavigateCall</a> <span class="cons_Lit">"/"</span>}+&gt; <span class="cons_String">)</span> <span class="cons_String">{</span>
      &lt;<a href="#TemplateElement_15_3" id="TemplateElement_40_8" title="a reference to a single-file definition">TemplateElement</a>*&gt;
    <span class="cons_String">}</span>
  &gt;
  <a href="#DispatchNavigateButton_37_21" id="DispatchNavigateButton_43_3" title="a definition with a single reference">DispatchNavigateButton</a>.<span class="cons_Constructor"><span id="DispatchNavigateButton_43_26" title="a definition with no references">DispatchNavigateButton</span></span> = &lt;
    <span class="cons_String">navigate</span> <span class="cons_String">(</span> &lt;<a href="../WebDSL-Action.sdf3/#Exp_34_3" id="Exp_44_17" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">,</span> &lt;{<a href="#DispatchNavigateCall_11_33" id="DispatchNavigateCall_44_26" title="a reference to a single-file definition">DispatchNavigateCall</a> <span class="cons_Lit">"/"</span>}+&gt; <span class="cons_String">)</span>
  &gt;
  <button class="modal-open" id="DispatchNavigateCall_46_3" title="a definition with multiple references" data-urls="#DispatchNavigateCall line 39_18, 44_26, 49_35">DispatchNavigateCall</button>.<span class="cons_Constructor"><span id="DispatchNavigateCall_46_24" title="a definition with no references">DispatchNavigateCall</span></span> = &lt;&lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_46_49" title="a reference to a single-file definition">Id</a>&gt; <span class="cons_String">(</span> &lt;{<a href="../WebDSL-Action.sdf3/#Exp_34_3" id="Exp_46_57" title="a reference to a single-file definition">Exp</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span>&gt;
  <button class="modal-open" id="DispatchNavigateCall_47_3" title="a definition with multiple references" data-urls="#DispatchNavigateCall line 39_18, 44_26, 49_35">DispatchNavigateCall</button>.<span class="cons_Constructor"><span id="DispatchNavigateCallNoArg_47_24" title="a definition with no references">DispatchNavigateCallNoArg</span></span> = <a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_47_52" title="a reference to a single-file definition">Id</a>

  <a href="#DispatchNavigate_36_21" id="DispatchNavigate_49_3" title="a definition with a single reference">DispatchNavigate</a> = &lt;<span class="cons_String">navigate</span> <span class="cons_String">(</span> &lt;<a href="#DispatchNavigateCall_11_33" id="DispatchNavigateCall_49_35" title="a reference to a single-file definition">DispatchNavigateCall</a>&gt; <span class="cons_String">)</span> <span class="cons_String">{</span> &lt;<a href="#TemplateElement_15_3" id="TemplateElement_49_62" title="a reference to a single-file definition">TemplateElement</a>*&gt; <span class="cons_String">}</span>&gt; {<span class="keyword">reject</span>}

<span class="keyword">lexical syntax</span>

  <span id="TemplateId_53_3" title="a definition with no references">TemplateId</span> = <span class="cons_Lit">"navigate"</span> {<span class="keyword">reject</span>}

</code></pre></td></tr></tbody></table></div>

<div id="modal">
  <div id="modal-content">
    <span id="modal-close">&times;</span>
    <h2 id="modal-h2"></h2>
    <p  id="modal-p"></p>
    <ul id="modal-ul"></ul>
  </div>
</div>
