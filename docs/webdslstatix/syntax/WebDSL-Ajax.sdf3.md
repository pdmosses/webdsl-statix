---
title: WebDSL-Ajax.sdf3
hide:
  - toc
---

# `WebDSL-Ajax.sdf3`

:simple-github: [pdmosses/webdsl-statix/webdslstatix/syntax/WebDSL-Ajax.sdf3]

[pdmosses/webdsl-statix/webdslstatix/syntax/WebDSL-Ajax.sdf3]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/syntax/WebDSL-Ajax.sdf3 "The source file on GitHub"

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
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
94
95
96
97
98
99
100
101
102
103
104
105
106
107
108
109
110
111
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl-statix.sdf3/#WebDSL-Ajax_6_3" id="WebDSL-Ajax_1_8" title="a definition with a single reference">WebDSL-Ajax</a>

<span class="keyword">imports</span>
  <a href="../WebDSL-Action.sdf3/#WebDSL-Action_1_8" id="WebDSL-Action_4_3" title="a reference to a single-file definition">WebDSL-Action</a>
  <a href="../WebDSL-Lexical.sdf3/#WebDSL-Lexical_1_8" id="WebDSL-Lexical_5_3" title="a reference to a single-file definition">WebDSL-Lexical</a>
  <a href="../WebDSL-UI.sdf3/#WebDSL-UI_1_8" id="WebDSL-UI_6_3" title="a reference to a single-file definition">WebDSL-UI</a>
  <a href="../WebDSL-Core.sdf3/#WebDSL-Core_1_8" id="WebDSL-Core_7_3" title="a reference to a single-file definition">WebDSL-Core</a>

<span class="keyword">context-free sorts</span>

  <a href="#AjaxStatement_16_6" id="AjaxStatement_11_3" title="a definition with a single reference">AjaxStatement</a> <button class="modal-open" id="Placeholder_11_17" title="a definition with multiple references" data-urls="#Placeholder line 58_6, 97_3, 98_3">Placeholder</button> <a href="#PlaceholderWithAjaxCall_61_6" id="PlaceholderWithAjaxCall_11_29" title="a definition with a single reference">PlaceholderWithAjaxCall</a> <a href="#PlaceholderVar_82_21" id="PlaceholderVar_11_53" title="a definition with a single reference">PlaceholderVar</a> <button class="modal-open" id="AjaxVisibility_11_68" title="a definition with multiple references" data-urls="#AjaxVisibility line 21_57, 48_37">AjaxVisibility</button> <button class="modal-open" id="AjaxReplaceTemplateCall_11_83" title="a definition with multiple references" data-urls="#AjaxReplaceTemplateCall line 19_51, 46_34">AjaxReplaceTemplateCall</button>

<span class="keyword">context-free syntax</span>

  <span id="Statement_15_3" title="a definition with no references">Statement</span>.<span class="cons_Constructor"><span id="AjaxStatement_15_13" title="a definition with no references">AjaxStatement</span></span> = &lt;
    &lt;<a href="#AjaxStatement_11_3" id="AjaxStatement_16_6" title="a reference to a single-file definition">AjaxStatement</a>&gt; <span class="cons_String">;</span>
  &gt;

  <a href="#AjaxStatement_16_6" id="AjaxStatement_19_3" title="a definition with a single reference">AjaxStatement</a>.<span class="cons_Constructor"><span id="AjaxReplace_19_17" title="a definition with no references">AjaxReplace</span></span> = &lt;<span class="cons_String">replace</span> <span class="cons_String">(</span> &lt;<a href="../WebDSL-UI.sdf3/#Exp_469_3" id="Exp_19_43" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">,</span> &lt;<a href="#AjaxReplaceTemplateCall_11_83" id="AjaxReplaceTemplateCall_19_51" title="a reference to a single-file definition">AjaxReplaceTemplateCall</a>&gt; <span class="cons_String">)</span>&gt;
  <a href="#AjaxStatement_16_6" id="AjaxStatement_20_3" title="a definition with a single reference">AjaxStatement</a>.<span class="cons_Constructor"><span id="AjaxAppend_20_17" title="a definition with no references">AjaxAppend</span></span> = &lt;<span class="cons_String">append</span> <span class="cons_String">(</span> &lt;<a href="../WebDSL-UI.sdf3/#Exp_469_3" id="Exp_20_41" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">,</span> &lt;<a href="../WebDSL-UI.sdf3/#TemplateCall_16_66" id="TemplateCall_20_49" title="a reference to a single-file definition">TemplateCall</a>&gt; <span class="cons_String">)</span>&gt;
  <a href="#AjaxStatement_16_6" id="AjaxStatement_21_3" title="a definition with a single reference">AjaxStatement</a>.<span class="cons_Constructor"><span id="AjaxVisibility_21_17" title="a definition with no references">AjaxVisibility</span></span> = &lt;<span class="cons_String">visibility</span> <span class="cons_String">(</span> &lt;<a href="../WebDSL-UI.sdf3/#Exp_469_3" id="Exp_21_49" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">,</span> &lt;<a href="#AjaxVisibility_11_68" id="AjaxVisibility_21_57" title="a reference to a single-file definition">AjaxVisibility</a>&gt; <span class="cons_String">)</span>&gt;
  <button class="modal-open" id="AjaxVisibility_22_3" title="a definition with multiple references" data-urls="#AjaxVisibility line 21_57, 48_37">AjaxVisibility</button>.<span class="cons_Constructor"><span id="Show_22_18" title="a definition with no references">Show</span></span> = &lt;<span class="cons_String">show</span>&gt;
  <button class="modal-open" id="AjaxVisibility_23_3" title="a definition with multiple references" data-urls="#AjaxVisibility line 21_57, 48_37">AjaxVisibility</button>.<span class="cons_Constructor"><span id="Toggle_23_18" title="a definition with no references">Toggle</span></span> = &lt;<span class="cons_String">toggle</span>&gt;
  <button class="modal-open" id="AjaxVisibility_24_3" title="a definition with multiple references" data-urls="#AjaxVisibility line 21_57, 48_37">AjaxVisibility</button>.<span class="cons_Constructor"><span id="Hide_24_18" title="a definition with no references">Hide</span></span> = &lt;<span class="cons_String">hide</span>&gt;
  <a href="#AjaxStatement_16_6" id="AjaxStatement_25_3" title="a definition with a single reference">AjaxStatement</a>.<span class="cons_Constructor"><span id="AjaxRelocate_25_17" title="a definition with no references">AjaxRelocate</span></span> = &lt;<span class="cons_String">relocate</span> <span class="cons_String">(</span> &lt;<a href="../WebDSL-UI.sdf3/#PageCall_16_57" id="PageCall_25_45" title="a reference to a single-file definition">PageCall</a>&gt; <span class="cons_String">)</span>&gt;
  <a href="#AjaxStatement_16_6" id="AjaxStatement_26_3" title="a definition with a single reference">AjaxStatement</a>.<span class="cons_Constructor"><span id="AjaxRestyle_26_17" title="a definition with no references">AjaxRestyle</span></span> = &lt;<span class="cons_String">restyle</span> <span class="cons_String">(</span> &lt;<a href="../WebDSL-UI.sdf3/#Exp_469_3" id="Exp_26_43" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">,</span> &lt;<a href="../WebDSL-UI.sdf3/#Exp_469_3" id="Exp_26_51" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">)</span>&gt;
  <a href="#AjaxStatement_16_6" id="AjaxStatement_27_3" title="a definition with a single reference">AjaxStatement</a>.<span class="cons_Constructor"><span id="AjaxClear_27_17" title="a definition with no references">AjaxClear</span></span> = &lt;<span class="cons_String">clear</span> <span class="cons_String">(</span> &lt;<a href="../WebDSL-UI.sdf3/#Exp_469_3" id="Exp_27_39" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">)</span>&gt;
  <a href="#AjaxStatement_16_6" id="AjaxStatement_28_3" title="a definition with a single reference">AjaxStatement</a>.<span class="cons_Constructor"><span id="AjaxRefresh_28_17" title="a definition with no references">AjaxRefresh</span></span> = &lt;<span class="cons_String">refresh</span> <span class="cons_String">(</span> <span class="cons_String">)</span>&gt;
  <a href="#AjaxStatement_16_6" id="AjaxStatement_29_3" title="a definition with a single reference">AjaxStatement</a>.<span class="cons_Constructor"><span id="AjaxRunScript_29_17" title="a definition with no references">AjaxRunScript</span></span> = &lt;<span class="cons_String">runscript</span> <span class="cons_String">(</span> &lt;<a href="../WebDSL-UI.sdf3/#Exp_469_3" id="Exp_29_47" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">)</span>&gt;

<span class="keyword">context-free syntax</span>

  <button class="modal-open" id="AjaxReplaceTemplateCall_33_3" title="a definition with multiple references" data-urls="#AjaxReplaceTemplateCall line 19_51, 46_34">AjaxReplaceTemplateCall</button>.<span class="cons_Constructor"><span id="AjaxReplaceTemplateCall_33_27" title="a definition with no references">AjaxReplaceTemplateCall</span></span> = &lt;&lt;<a href="../WebDSL-UI.sdf3/#TemplateCall_16_66" id="TemplateCall_33_55" title="a reference to a single-file definition">TemplateCall</a>&gt;&gt;
  <button class="modal-open" id="AjaxReplaceTemplateCall_34_3" title="a definition with multiple references" data-urls="#AjaxReplaceTemplateCall line 19_51, 46_34">AjaxReplaceTemplateCall</button>.<span class="cons_Constructor"><span id="AjaxReplaceEmpty_34_27" title="a definition with no references">AjaxReplaceEmpty</span></span> = &lt;&lt;<a href="#EmptyLex_38_3" id="EmptyLex_34_48" title="a reference to a single-file definition">EmptyLex</a>&gt;&gt;

<span class="keyword">lexical sorts</span>

  <a href="#EmptyLex_34_48" id="EmptyLex_38_3" title="a definition with a single reference">EmptyLex</a>

<span class="keyword">lexical syntax</span>

  <a href="#EmptyLex_34_48" id="EmptyLex_42_3" title="a definition with a single reference">EmptyLex</a> = <span class="cons_Lit">"empty"</span>

<span class="keyword">context-free syntax</span>

  <a href="#ThisCall_106_22" id="ThisCall_46_3" title="a definition with a single reference">ThisCall</a> = &lt;<span class="cons_String">replace</span> <span class="cons_String">(</span> &lt;<a href="../WebDSL-UI.sdf3/#Exp_469_3" id="Exp_46_26" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">,</span> &lt;<a href="#AjaxReplaceTemplateCall_11_83" id="AjaxReplaceTemplateCall_46_34" title="a reference to a single-file definition">AjaxReplaceTemplateCall</a>&gt; <span class="cons_String">)</span>&gt; {<span class="keyword">reject</span>}
  <a href="#ThisCall_106_22" id="ThisCall_47_3" title="a definition with a single reference">ThisCall</a> = &lt;<span class="cons_String">append</span> <span class="cons_String">(</span> &lt;<a href="../WebDSL-UI.sdf3/#Exp_469_3" id="Exp_47_25" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">,</span> &lt;<a href="../WebDSL-UI.sdf3/#TemplateCall_16_66" id="TemplateCall_47_33" title="a reference to a single-file definition">TemplateCall</a>&gt; <span class="cons_String">)</span>&gt; {<span class="keyword">reject</span>}
  <a href="#ThisCall_106_22" id="ThisCall_48_3" title="a definition with a single reference">ThisCall</a> = &lt;<span class="cons_String">visibility</span> <span class="cons_String">(</span> &lt;<a href="../WebDSL-UI.sdf3/#Exp_469_3" id="Exp_48_29" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">,</span> &lt;<a href="#AjaxVisibility_11_68" id="AjaxVisibility_48_37" title="a reference to a single-file definition">AjaxVisibility</a>&gt; <span class="cons_String">)</span>&gt; {<span class="keyword">reject</span>}
  <a href="#ThisCall_106_22" id="ThisCall_49_3" title="a definition with a single reference">ThisCall</a> = &lt;<span class="cons_String">relocate</span> <span class="cons_String">(</span> &lt;<a href="../WebDSL-UI.sdf3/#PageCall_16_57" id="PageCall_49_27" title="a reference to a single-file definition">PageCall</a>&gt; <span class="cons_String">)</span>&gt; {<span class="keyword">reject</span>}
  <a href="#ThisCall_106_22" id="ThisCall_50_3" title="a definition with a single reference">ThisCall</a> = &lt;<span class="cons_String">restyle</span> <span class="cons_String">(</span> &lt;<a href="../WebDSL-UI.sdf3/#Exp_469_3" id="Exp_50_26" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">,</span> &lt;<a href="../WebDSL-UI.sdf3/#Exp_469_3" id="Exp_50_34" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">)</span>&gt; {<span class="keyword">reject</span>}
  <a href="#ThisCall_106_22" id="ThisCall_51_3" title="a definition with a single reference">ThisCall</a> = &lt;<span class="cons_String">clear</span> <span class="cons_String">(</span> &lt;<a href="../WebDSL-UI.sdf3/#Exp_469_3" id="Exp_51_24" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">)</span>&gt; {<span class="keyword">reject</span>}
  <a href="#ThisCall_106_22" id="ThisCall_52_3" title="a definition with a single reference">ThisCall</a> = &lt;<span class="cons_String">refresh</span> <span class="cons_String">(</span> <span class="cons_String">)</span>&gt; {<span class="keyword">reject</span>}
  <a href="#ThisCall_106_22" id="ThisCall_53_3" title="a definition with a single reference">ThisCall</a> = &lt;<span class="cons_String">runscript</span> <span class="cons_String">(</span> &lt;<a href="../WebDSL-UI.sdf3/#Exp_469_3" id="Exp_53_28" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">)</span>&gt; {<span class="keyword">reject</span>}

<span class="keyword">context-free syntax</span>

  <button class="modal-open" id="TemplateElement_57_3" title="a definition with multiple references" data-urls="#TemplateElement line 65_6, 68_6, 71_6, 74_6">TemplateElement</button>.<span class="cons_Constructor"><span id="TEPlaceholder_57_19" title="a definition with no references">TEPlaceholder</span></span> = &lt;
    &lt;<a href="#Placeholder_11_17" id="Placeholder_58_6" title="a reference to a single-file definition">Placeholder</a>&gt;
  &gt;
  <button class="modal-open" id="TemplateElement_60_3" title="a definition with multiple references" data-urls="#TemplateElement line 65_6, 68_6, 71_6, 74_6">TemplateElement</button>.<span class="cons_Constructor"><span id="TEPlaceholderWithAjaxCall_60_19" title="a definition with no references">TEPlaceholderWithAjaxCall</span></span> = &lt;
    &lt;<a href="#PlaceholderWithAjaxCall_11_29" id="PlaceholderWithAjaxCall_61_6" title="a reference to a single-file definition">PlaceholderWithAjaxCall</a>&gt;
  &gt;

  <button class="modal-open" id="Placeholder_64_3" title="a definition with multiple references" data-urls="#Placeholder line 58_6, 97_3, 98_3">Placeholder</button>.<span class="cons_Constructor"><span id="PlaceholderHtml_64_15" title="a definition with no references">PlaceholderHtml</span></span> = &lt;<span class="cons_String">placeholder</span> \&lt; &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_64_50" title="a reference to a single-file definition">Id</a>&gt; \&gt; &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_64_58" title="a reference to a single-file definition">Id</a>&gt; <span class="cons_String">{</span>
    &lt;<a href="#TemplateElement_57_3" id="TemplateElement_65_6" title="a reference to a single-file definition">TemplateElement</a>*&gt;
  <span class="cons_String">}</span>&gt;
  <button class="modal-open" id="Placeholder_67_3" title="a definition with multiple references" data-urls="#Placeholder line 58_6, 97_3, 98_3">Placeholder</button>.<span class="cons_Constructor"><a href="#PlaceholderHtmlExp_97_15" id="PlaceholderHtmlExp_67_15" title="a definition with a single reference">PlaceholderHtmlExp</a></span> = &lt;<span class="cons_String">placeholder</span> \&lt; &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_67_53" title="a reference to a single-file definition">Id</a>&gt; \&gt; &lt;<a href="../WebDSL-UI.sdf3/#Exp_469_3" id="Exp_67_61" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">{</span>
    &lt;<a href="#TemplateElement_57_3" id="TemplateElement_68_6" title="a reference to a single-file definition">TemplateElement</a>*&gt;
  <span class="cons_String">}</span>&gt;
  <button class="modal-open" id="Placeholder_70_3" title="a definition with multiple references" data-urls="#Placeholder line 58_6, 97_3, 98_3">Placeholder</button>.<span class="cons_Constructor"><span id="Placeholder_70_15" title="a definition with no references">Placeholder</span></span> = &lt;<span class="cons_String">placeholder</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_70_43" title="a reference to a single-file definition">Id</a>&gt; <span class="cons_String">{</span>
    &lt;<a href="#TemplateElement_57_3" id="TemplateElement_71_6" title="a reference to a single-file definition">TemplateElement</a>*&gt;
  <span class="cons_String">}</span>&gt;
  <button class="modal-open" id="Placeholder_73_3" title="a definition with multiple references" data-urls="#Placeholder line 58_6, 97_3, 98_3">Placeholder</button>.<span class="cons_Constructor"><a href="#PlaceholderExp_98_15" id="PlaceholderExp_73_15" title="a definition with a single reference">PlaceholderExp</a></span> = &lt;<span class="cons_String">placeholder</span> &lt;<a href="../WebDSL-UI.sdf3/#Exp_469_3" id="Exp_73_46" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">{</span>
    &lt;<a href="#TemplateElement_57_3" id="TemplateElement_74_6" title="a reference to a single-file definition">TemplateElement</a>*&gt;
  <span class="cons_String">}</span>&gt;

  <a href="#PlaceholderWithAjaxCall_61_6" id="PlaceholderWithAjaxCall_77_3" title="a definition with a single reference">PlaceholderWithAjaxCall</a>.<span class="cons_Constructor"><span id="PlaceholderAjaxHtml_77_27" title="a definition with no references">PlaceholderAjaxHtml</span></span> = &lt;<span class="cons_String">placeholder</span> \&lt; &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_77_66" title="a reference to a single-file definition">Id</a>&gt; \&gt; &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_77_74" title="a reference to a single-file definition">Id</a>&gt; &lt;<a href="../WebDSL-UI.sdf3/#TemplateCall_16_66" id="TemplateCall_77_79" title="a reference to a single-file definition">TemplateCall</a>&gt;&gt;
  <a href="#PlaceholderWithAjaxCall_61_6" id="PlaceholderWithAjaxCall_78_3" title="a definition with a single reference">PlaceholderWithAjaxCall</a>.<span class="cons_Constructor"><span id="PlaceholderAjaxHtmlExp_78_27" title="a definition with no references">PlaceholderAjaxHtmlExp</span></span> = &lt;<span class="cons_String">placeholder</span> \&lt; &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_78_69" title="a reference to a single-file definition">Id</a>&gt; \&gt; &lt;<a href="#PHExp_102_3" id="PHExp_78_77" title="a reference to a single-file definition">PHExp</a>&gt; &lt;<a href="../WebDSL-UI.sdf3/#TemplateCall_16_66" id="TemplateCall_78_85" title="a reference to a single-file definition">TemplateCall</a>&gt;&gt;
  <a href="#PlaceholderWithAjaxCall_61_6" id="PlaceholderWithAjaxCall_79_3" title="a definition with a single reference">PlaceholderWithAjaxCall</a>.<span class="cons_Constructor"><span id="PlaceholderAjax_79_27" title="a definition with no references">PlaceholderAjax</span></span> = &lt;<span class="cons_String">placeholder</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_79_59" title="a reference to a single-file definition">Id</a>&gt; &lt;<a href="../WebDSL-UI.sdf3/#TemplateCall_16_66" id="TemplateCall_79_64" title="a reference to a single-file definition">TemplateCall</a>&gt;&gt;
  <a href="#PlaceholderWithAjaxCall_61_6" id="PlaceholderWithAjaxCall_80_3" title="a definition with a single reference">PlaceholderWithAjaxCall</a>.<span class="cons_Constructor"><span id="PlaceholderAjaxExp_80_27" title="a definition with no references">PlaceholderAjaxExp</span></span> = &lt;<span class="cons_String">placeholder</span> &lt;<a href="#PHExp_102_3" id="PHExp_80_62" title="a reference to a single-file definition">PHExp</a>&gt; &lt;<a href="../WebDSL-UI.sdf3/#TemplateCall_16_66" id="TemplateCall_80_70" title="a reference to a single-file definition">TemplateCall</a>&gt;&gt;

  <button class="modal-open" id="TemplateElement_82_3" title="a definition with multiple references" data-urls="#TemplateElement line 65_6, 68_6, 71_6, 74_6">TemplateElement</button> = <a href="#PlaceholderVar_11_53" id="PlaceholderVar_82_21" title="a reference to a single-file definition">PlaceholderVar</a>

  <a href="#PlaceholderVar_82_21" id="PlaceholderVar_84_3" title="a definition with a single reference">PlaceholderVar</a>.<span class="cons_Constructor"><span id="PlaceholderVar_84_18" title="a definition with no references">PlaceholderVar</span></span> = &lt;<span class="cons_String">placeholdervar</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_84_52" title="a reference to a single-file definition">Id</a>&gt;&gt;

<span class="keyword">lexical syntax</span>

  <span id="TemplateId_88_3" title="a definition with no references">TemplateId</span> = <span class="cons_Lit">"placeholder"</span> {<span class="keyword">reject</span>}
  <span id="TemplateId_89_3" title="a definition with no references">TemplateId</span> = <span class="cons_Lit">"placeholdervar"</span> {<span class="keyword">reject</span>}

<span class="keyword">lexical restrictions</span>

  <span class="cons_Lit">"placeholder"</span> -/- [<span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>]

<span class="keyword">context-free priorities</span>

  <a href="#Placeholder_11_17" id="Placeholder_97_3" title="a reference to a single-file definition">Placeholder</a>.<span class="cons_Constructor"><a href="#PlaceholderHtmlExp_67_15" id="PlaceholderHtmlExp_97_15" title="a reference to a single-file definition">PlaceholderHtmlExp</a></span> &lt;4&gt; .&gt; <a href="../WebDSL-UI.sdf3/#Exp_469_3" id="Exp_97_41" title="a reference to a single-file definition">Exp</a>.<span class="cons_Constructor"><a href="../WebDSL-Action.sdf3/#Var_190_7" id="Var_97_45" title="a reference to a single-file definition">Var</a></span>,
  <a href="#Placeholder_11_17" id="Placeholder_98_3" title="a reference to a single-file definition">Placeholder</a>.<span class="cons_Constructor"><a href="#PlaceholderExp_73_15" id="PlaceholderExp_98_15" title="a reference to a single-file definition">PlaceholderExp</a></span> &lt;1&gt; .&gt; <a href="../WebDSL-UI.sdf3/#Exp_469_3" id="Exp_98_37" title="a reference to a single-file definition">Exp</a>.<span class="cons_Constructor"><a href="../WebDSL-Action.sdf3/#Var_190_7" id="Var_98_41" title="a reference to a single-file definition">Var</a></span>

<span class="keyword">context-free sorts</span>

  <button class="modal-open" id="PHExp_102_3" title="a definition with multiple references" data-urls="#PHExp line 78_77, 80_62">PHExp</button>

<span class="keyword">context-free syntax</span>

  <button class="modal-open" id="PHExp_106_3" title="a definition with multiple references" data-urls="#PHExp line 78_77, 80_62">PHExp</button>.<span class="cons_Constructor"><span id="PHThisCall_106_9" title="a definition with no references">PHThisCall</span></span> = <a href="#ThisCall_46_3" id="ThisCall_106_22" title="a reference to a single-file definition">ThisCall</a>
  <button class="modal-open" id="PHExp_107_3" title="a definition with multiple references" data-urls="#PHExp line 78_77, 80_62">PHExp</button>.<span class="cons_Constructor"><span id="PHCall_107_9" title="a definition with no references">PHCall</span></span> = &lt;&lt;<a href="../WebDSL-UI.sdf3/#Exp_469_3" id="Exp_107_20" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">.</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_107_28" title="a reference to a single-file definition">Id</a>&gt; <span class="cons_String">(</span> &lt;{<a href="../WebDSL-UI.sdf3/#Exp_469_3" id="Exp_107_36" title="a reference to a single-file definition">Exp</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span>&gt;
  <button class="modal-open" id="PHExp_108_3" title="a definition with multiple references" data-urls="#PHExp line 78_77, 80_62">PHExp</button>.<span class="cons_Constructor"><span id="PHFieldAccess_108_9" title="a definition with no references">PHFieldAccess</span></span> = &lt;&lt;<a href="../WebDSL-UI.sdf3/#Exp_469_3" id="Exp_108_27" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">.</span> &lt;<a href="../WebDSL-Lexical.sdf3/#PropertyId_5_38" id="PropertyId_108_35" title="a reference to a single-file definition">PropertyId</a>&gt;&gt;
  <button class="modal-open" id="PHExp_109_3" title="a definition with multiple references" data-urls="#PHExp line 78_77, 80_62">PHExp</button>.<span class="cons_Constructor"><span id="PHCollectionIndex_109_9" title="a definition with no references">PHCollectionIndex</span></span> = &lt;&lt;<a href="../WebDSL-UI.sdf3/#Exp_469_3" id="Exp_109_31" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">[</span> &lt;<a href="../WebDSL-UI.sdf3/#Exp_469_3" id="Exp_109_39" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">]</span>&gt;
  <button class="modal-open" id="PHExp_110_3" title="a definition with multiple references" data-urls="#PHExp line 78_77, 80_62">PHExp</button>.<span class="cons_Constructor"><span id="PHAdd_110_9" title="a definition with no references">PHAdd</span></span> = &lt;&lt;<a href="../WebDSL-UI.sdf3/#Exp_469_3" id="Exp_110_19" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">+</span> &lt;<a href="../WebDSL-UI.sdf3/#Exp_469_3" id="Exp_110_27" title="a reference to a single-file definition">Exp</a>&gt;&gt;
  <button class="modal-open" id="PHExp_111_3" title="a definition with multiple references" data-urls="#PHExp line 78_77, 80_62">PHExp</button>.<span class="cons_Constructor"><span id="PHConst_111_9" title="a definition with no references">PHConst</span></span> = <a href="../WebDSL-Action.sdf3/#ConstValue_179_3" id="ConstValue_111_19" title="a reference to a single-file definition">ConstValue</a>

</code></pre></td></tr></tbody></table></div>

<div id="modal">
  <div id="modal-content">
    <span id="modal-close">&times;</span>
    <h2 id="modal-h2"></h2>
    <p  id="modal-p"></p>
    <ul id="modal-ul"></ul>
  </div>
</div>
