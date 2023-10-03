---
title: WebDSL-Ajax.sdf3
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
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl-statix.sdf3#WebDSL-Ajax_71_82" id="WebDSL-Ajax_7_18" title="Referenced at ../webdsl-statix.sdf3 line 6">WebDSL-Ajax</a>

<span class="keyword">imports</span>
  <a href="../WebDSL-Action.sdf3#WebDSL-Action_7_20" id="WebDSL-Action_30_43" title="Defined at ../WebDSL-Action.sdf3 line 1">WebDSL-Action</a>
  <a href="../WebDSL-Lexical.sdf3#WebDSL-Lexical_7_21" id="WebDSL-Lexical_46_60" title="Defined at ../WebDSL-Lexical.sdf3 line 1">WebDSL-Lexical</a>
  <a href="../WebDSL-UI.sdf3#WebDSL-UI_7_16" id="WebDSL-UI_63_72" title="Defined at ../WebDSL-UI.sdf3 line 1">WebDSL-UI</a>
  <a href="../WebDSL-Core.sdf3#WebDSL-Core_7_18" id="WebDSL-Core_75_86" title="Defined at ../WebDSL-Core.sdf3 line 1">WebDSL-Core</a>

<span class="keyword">context-free sorts</span>

  <a href="#AjaxStatement_271_284" id="AjaxStatement_110_123" title="Referenced at line 16">AjaxStatement</a> <a href="#Placeholder_2694_2705" id="Placeholder_124_135" title="Referenced at line 98">Placeholder</a> <a href="#PlaceholderWithAjaxCall_1646_1669" id="PlaceholderWithAjaxCall_136_159" title="Referenced at line 61">PlaceholderWithAjaxCall</a> <a href="#PlaceholderVar_2394_2408" id="PlaceholderVar_160_174" title="Referenced at line 82">PlaceholderVar</a> <a href="#AjaxVisibility_1267_1281" id="AjaxVisibility_175_189" title="Referenced at line 48">AjaxVisibility</a> <a href="#AjaxReplaceTemplateCall_1136_1159" id="AjaxReplaceTemplateCall_190_213" title="Referenced at line 46">AjaxReplaceTemplateCall</a>

<span class="keyword">context-free syntax</span>

  <span id="Statement_238_247" title="Not referenced locally, nor via imports">Statement</span>.<span class="cons_Constructor"><span id="AjaxStatement_248_261" title="Not referenced locally, nor via imports">AjaxStatement</span></span> = &lt;
    &lt;<a href="#AjaxStatement_110_123" id="AjaxStatement_271_284" title="Defined at line 11, 19, 20, 21, 25, 26, 27, 28, 29">AjaxStatement</a>&gt; <span class="cons_String">;</span>
  &gt;

  <a href="#AjaxStatement_271_284" id="AjaxStatement_295_308" title="Referenced at line 16">AjaxStatement</a>.<span class="cons_Constructor"><span id="AjaxReplace_309_320" title="Not referenced locally, nor via imports">AjaxReplace</span></span> = &lt;<span class="cons_String">replace</span> <span class="cons_String">(</span> &lt;<a href="../WebDSL-UI.sdf3#Exp_13248_13251" id="Exp_335_338" title="Defined at ../WebDSL-UI.sdf3 line 469, 517">Exp</a>&gt; <span class="cons_String">,</span> &lt;<a href="#AjaxReplaceTemplateCall_190_213" id="AjaxReplaceTemplateCall_343_366" title="Defined at line 11, 33, 34">AjaxReplaceTemplateCall</a>&gt; <span class="cons_String">)</span>&gt;
  <a href="#AjaxStatement_271_284" id="AjaxStatement_373_386" title="Referenced at line 16">AjaxStatement</a>.<span class="cons_Constructor"><span id="AjaxAppend_387_397" title="Not referenced locally, nor via imports">AjaxAppend</span></span> = &lt;<span class="cons_String">append</span> <span class="cons_String">(</span> &lt;<a href="../WebDSL-UI.sdf3#Exp_13248_13251" id="Exp_411_414" title="Defined at ../WebDSL-UI.sdf3 line 469, 517">Exp</a>&gt; <span class="cons_String">,</span> &lt;<a href="../WebDSL-UI.sdf3#TemplateCall_241_253" id="TemplateCall_419_431" title="Defined at ../WebDSL-UI.sdf3 line 16, 77, 254, 275, 436, 451, 452, 453, 454, 455, 456, 466">TemplateCall</a>&gt; <span class="cons_String">)</span>&gt;
  <a href="#AjaxStatement_271_284" id="AjaxStatement_438_451" title="Referenced at line 16">AjaxStatement</a>.<span class="cons_Constructor"><span id="AjaxVisibility_452_466" title="Not referenced locally, nor via imports">AjaxVisibility</span></span> = &lt;<span class="cons_String">visibility</span> <span class="cons_String">(</span> &lt;<a href="../WebDSL-UI.sdf3#Exp_13248_13251" id="Exp_484_487" title="Defined at ../WebDSL-UI.sdf3 line 469, 517">Exp</a>&gt; <span class="cons_String">,</span> &lt;<a href="#AjaxVisibility_175_189" id="AjaxVisibility_492_506" title="Defined at line 11, 22, 23, 24">AjaxVisibility</a>&gt; <span class="cons_String">)</span>&gt;
  <a href="#AjaxVisibility_1267_1281" id="AjaxVisibility_513_527" title="Referenced at line 48">AjaxVisibility</a>.<span class="cons_Constructor"><span id="Show_528_532" title="Not referenced locally, nor via imports">Show</span></span> = &lt;<span class="cons_String">show</span>&gt;
  <a href="#AjaxVisibility_1267_1281" id="AjaxVisibility_544_558" title="Referenced at line 48">AjaxVisibility</a>.<span class="cons_Constructor"><span id="Toggle_559_565" title="Not referenced locally, nor via imports">Toggle</span></span> = &lt;<span class="cons_String">toggle</span>&gt;
  <a href="#AjaxVisibility_1267_1281" id="AjaxVisibility_579_593" title="Referenced at line 48">AjaxVisibility</a>.<span class="cons_Constructor"><span id="Hide_594_598" title="Not referenced locally, nor via imports">Hide</span></span> = &lt;<span class="cons_String">hide</span>&gt;
  <a href="#AjaxStatement_271_284" id="AjaxStatement_610_623" title="Referenced at line 16">AjaxStatement</a>.<span class="cons_Constructor"><span id="AjaxRelocate_624_636" title="Not referenced locally, nor via imports">AjaxRelocate</span></span> = &lt;<span class="cons_String">relocate</span> <span class="cons_String">(</span> &lt;<a href="../WebDSL-UI.sdf3#PageCall_232_240" id="PageCall_652_660" title="Defined at ../WebDSL-UI.sdf3 line 16, 291">PageCall</a>&gt; <span class="cons_String">)</span>&gt;
  <a href="#AjaxStatement_271_284" id="AjaxStatement_667_680" title="Referenced at line 16">AjaxStatement</a>.<span class="cons_Constructor"><span id="AjaxRestyle_681_692" title="Not referenced locally, nor via imports">AjaxRestyle</span></span> = &lt;<span class="cons_String">restyle</span> <span class="cons_String">(</span> &lt;<a href="../WebDSL-UI.sdf3#Exp_13248_13251" id="Exp_707_710" title="Defined at ../WebDSL-UI.sdf3 line 469, 517">Exp</a>&gt; <span class="cons_String">,</span> &lt;<a href="../WebDSL-UI.sdf3#Exp_13248_13251" id="Exp_715_718" title="Defined at ../WebDSL-UI.sdf3 line 469, 517">Exp</a>&gt; <span class="cons_String">)</span>&gt;
  <a href="#AjaxStatement_271_284" id="AjaxStatement_725_738" title="Referenced at line 16">AjaxStatement</a>.<span class="cons_Constructor"><span id="AjaxClear_739_748" title="Not referenced locally, nor via imports">AjaxClear</span></span> = &lt;<span class="cons_String">clear</span> <span class="cons_String">(</span> &lt;<a href="../WebDSL-UI.sdf3#Exp_13248_13251" id="Exp_761_764" title="Defined at ../WebDSL-UI.sdf3 line 469, 517">Exp</a>&gt; <span class="cons_String">)</span>&gt;
  <a href="#AjaxStatement_271_284" id="AjaxStatement_771_784" title="Referenced at line 16">AjaxStatement</a>.<span class="cons_Constructor"><span id="AjaxRefresh_785_796" title="Not referenced locally, nor via imports">AjaxRefresh</span></span> = &lt;<span class="cons_String">refresh</span> <span class="cons_String">(</span> <span class="cons_String">)</span>&gt;
  <a href="#AjaxStatement_271_284" id="AjaxStatement_815_828" title="Referenced at line 16">AjaxStatement</a>.<span class="cons_Constructor"><span id="AjaxRunScript_829_842" title="Not referenced locally, nor via imports">AjaxRunScript</span></span> = &lt;<span class="cons_String">runscript</span> <span class="cons_String">(</span> &lt;<a href="../WebDSL-UI.sdf3#Exp_13248_13251" id="Exp_859_862" title="Defined at ../WebDSL-UI.sdf3 line 469, 517">Exp</a>&gt; <span class="cons_String">)</span>&gt;

<span class="keyword">context-free syntax</span>

  <a href="#AjaxReplaceTemplateCall_1136_1159" id="AjaxReplaceTemplateCall_891_914" title="Referenced at line 46">AjaxReplaceTemplateCall</a>.<span class="cons_Constructor"><span id="AjaxReplaceTemplateCall_915_938" title="Not referenced locally, nor via imports">AjaxReplaceTemplateCall</span></span> = &lt;&lt;<a href="../WebDSL-UI.sdf3#TemplateCall_241_253" id="TemplateCall_943_955" title="Defined at ../WebDSL-UI.sdf3 line 16, 77, 254, 275, 436, 451, 452, 453, 454, 455, 456, 466">TemplateCall</a>&gt;&gt;
  <a href="#AjaxReplaceTemplateCall_1136_1159" id="AjaxReplaceTemplateCall_960_983" title="Referenced at line 46">AjaxReplaceTemplateCall</a>.<span class="cons_Constructor"><span id="AjaxReplaceEmpty_984_1000" title="Not referenced locally, nor via imports">AjaxReplaceEmpty</span></span> = &lt;&lt;<a href="#EmptyLex_1034_1042" id="EmptyLex_1005_1013" title="Defined at line 38, 42">EmptyLex</a>&gt;&gt;

<span class="keyword">lexical sorts</span>

  <a href="#EmptyLex_1005_1013" id="EmptyLex_1034_1042" title="Referenced at line 34">EmptyLex</a>

<span class="keyword">lexical syntax</span>

  <a href="#EmptyLex_1005_1013" id="EmptyLex_1062_1070" title="Referenced at line 34">EmptyLex</a> = <span class="cons_Lit">"empty"</span>

<span class="keyword">context-free syntax</span>

  <a href="#ThisCall_2808_2816" id="ThisCall_1105_1113" title="Referenced at line 106">ThisCall</a> = &lt;<span class="cons_String">replace</span> <span class="cons_String">(</span> &lt;<a href="../WebDSL-UI.sdf3#Exp_13248_13251" id="Exp_1128_1131" title="Defined at ../WebDSL-UI.sdf3 line 469, 517">Exp</a>&gt; <span class="cons_String">,</span> &lt;<a href="#AjaxReplaceTemplateCall_190_213" id="AjaxReplaceTemplateCall_1136_1159" title="Defined at line 11, 33, 34">AjaxReplaceTemplateCall</a>&gt; <span class="cons_String">)</span>&gt; {<span class="keyword">reject</span>}
  <a href="#ThisCall_2808_2816" id="ThisCall_1175_1183" title="Referenced at line 106">ThisCall</a> = &lt;<span class="cons_String">append</span> <span class="cons_String">(</span> &lt;<a href="../WebDSL-UI.sdf3#Exp_13248_13251" id="Exp_1197_1200" title="Defined at ../WebDSL-UI.sdf3 line 469, 517">Exp</a>&gt; <span class="cons_String">,</span> &lt;<a href="../WebDSL-UI.sdf3#TemplateCall_241_253" id="TemplateCall_1205_1217" title="Defined at ../WebDSL-UI.sdf3 line 16, 77, 254, 275, 436, 451, 452, 453, 454, 455, 456, 466">TemplateCall</a>&gt; <span class="cons_String">)</span>&gt; {<span class="keyword">reject</span>}
  <a href="#ThisCall_2808_2816" id="ThisCall_1233_1241" title="Referenced at line 106">ThisCall</a> = &lt;<span class="cons_String">visibility</span> <span class="cons_String">(</span> &lt;<a href="../WebDSL-UI.sdf3#Exp_13248_13251" id="Exp_1259_1262" title="Defined at ../WebDSL-UI.sdf3 line 469, 517">Exp</a>&gt; <span class="cons_String">,</span> &lt;<a href="#AjaxVisibility_175_189" id="AjaxVisibility_1267_1281" title="Defined at line 11, 22, 23, 24">AjaxVisibility</a>&gt; <span class="cons_String">)</span>&gt; {<span class="keyword">reject</span>}
  <a href="#ThisCall_2808_2816" id="ThisCall_1297_1305" title="Referenced at line 106">ThisCall</a> = &lt;<span class="cons_String">relocate</span> <span class="cons_String">(</span> &lt;<a href="../WebDSL-UI.sdf3#PageCall_232_240" id="PageCall_1321_1329" title="Defined at ../WebDSL-UI.sdf3 line 16, 291">PageCall</a>&gt; <span class="cons_String">)</span>&gt; {<span class="keyword">reject</span>}
  <a href="#ThisCall_2808_2816" id="ThisCall_1345_1353" title="Referenced at line 106">ThisCall</a> = &lt;<span class="cons_String">restyle</span> <span class="cons_String">(</span> &lt;<a href="../WebDSL-UI.sdf3#Exp_13248_13251" id="Exp_1368_1371" title="Defined at ../WebDSL-UI.sdf3 line 469, 517">Exp</a>&gt; <span class="cons_String">,</span> &lt;<a href="../WebDSL-UI.sdf3#Exp_13248_13251" id="Exp_1376_1379" title="Defined at ../WebDSL-UI.sdf3 line 469, 517">Exp</a>&gt; <span class="cons_String">)</span>&gt; {<span class="keyword">reject</span>}
  <a href="#ThisCall_2808_2816" id="ThisCall_1395_1403" title="Referenced at line 106">ThisCall</a> = &lt;<span class="cons_String">clear</span> <span class="cons_String">(</span> &lt;<a href="../WebDSL-UI.sdf3#Exp_13248_13251" id="Exp_1416_1419" title="Defined at ../WebDSL-UI.sdf3 line 469, 517">Exp</a>&gt; <span class="cons_String">)</span>&gt; {<span class="keyword">reject</span>}
  <a href="#ThisCall_2808_2816" id="ThisCall_1435_1443" title="Referenced at line 106">ThisCall</a> = &lt;<span class="cons_String">refresh</span> <span class="cons_String">(</span> <span class="cons_String">)</span>&gt; {<span class="keyword">reject</span>}
  <a href="#ThisCall_2808_2816" id="ThisCall_1471_1479" title="Referenced at line 106">ThisCall</a> = &lt;<span class="cons_String">runscript</span> <span class="cons_String">(</span> &lt;<a href="../WebDSL-UI.sdf3#Exp_13248_13251" id="Exp_1496_1499" title="Defined at ../WebDSL-UI.sdf3 line 469, 517">Exp</a>&gt; <span class="cons_String">)</span>&gt; {<span class="keyword">reject</span>}

<span class="keyword">context-free syntax</span>

  <a href="#TemplateElement_1995_2010" id="TemplateElement_1537_1552" title="Referenced at line 74">TemplateElement</a>.<span class="cons_Constructor"><span id="TEPlaceholder_1553_1566" title="Not referenced locally, nor via imports">TEPlaceholder</span></span> = &lt;
    &lt;<a href="#Placeholder_124_135" id="Placeholder_1576_1587" title="Defined at line 11, 64, 67, 70, 73">Placeholder</a>&gt;
  &gt;
  <a href="#TemplateElement_1995_2010" id="TemplateElement_1595_1610" title="Referenced at line 74">TemplateElement</a>.<span class="cons_Constructor"><span id="TEPlaceholderWithAjaxCall_1611_1636" title="Not referenced locally, nor via imports">TEPlaceholderWithAjaxCall</span></span> = &lt;
    &lt;<a href="#PlaceholderWithAjaxCall_136_159" id="PlaceholderWithAjaxCall_1646_1669" title="Defined at line 11, 77, 78, 79, 80">PlaceholderWithAjaxCall</a>&gt;
  &gt;

  <a href="#Placeholder_2694_2705" id="Placeholder_1678_1689" title="Referenced at line 98">Placeholder</a>.<span class="cons_Constructor"><span id="PlaceholderHtml_1690_1705" title="Not referenced locally, nor via imports">PlaceholderHtml</span></span> = &lt;<span class="cons_String">placeholder</span> \&lt; &lt;<a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_1725_1727" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; \&gt; &lt;<a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_1733_1735" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; <span class="cons_String">{</span>
    &lt;<a href="#TemplateElement_1537_1552" id="TemplateElement_1744_1759" title="Defined at line 57, 60, 82">TemplateElement</a>*&gt;
  <span class="cons_String">}</span>&gt;
  <a href="#Placeholder_2694_2705" id="Placeholder_1769_1780" title="Referenced at line 98">Placeholder</a>.<span class="cons_Constructor"><a href="#PlaceholderHtmlExp_2657_2675" id="PlaceholderHtmlExp_1781_1799" title="Referenced at line 97">PlaceholderHtmlExp</a></span> = &lt;<span class="cons_String">placeholder</span> \&lt; &lt;<a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_1819_1821" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; \&gt; &lt;<a href="../WebDSL-UI.sdf3#Exp_13248_13251" id="Exp_1827_1830" title="Defined at ../WebDSL-UI.sdf3 line 469, 517">Exp</a>&gt; <span class="cons_String">{</span>
    &lt;<a href="#TemplateElement_1537_1552" id="TemplateElement_1839_1854" title="Defined at line 57, 60, 82">TemplateElement</a>*&gt;
  <span class="cons_String">}</span>&gt;
  <a href="#Placeholder_2694_2705" id="Placeholder_1864_1875" title="Referenced at line 98">Placeholder</a>.<span class="cons_Constructor"><span id="Placeholder_1876_1887" title="Not referenced locally, nor via imports">Placeholder</span></span> = &lt;<span class="cons_String">placeholder</span> &lt;<a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_1904_1906" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; <span class="cons_String">{</span>
    &lt;<a href="#TemplateElement_1537_1552" id="TemplateElement_1915_1930" title="Defined at line 57, 60, 82">TemplateElement</a>*&gt;
  <span class="cons_String">}</span>&gt;
  <a href="#Placeholder_2694_2705" id="Placeholder_1940_1951" title="Referenced at line 98">Placeholder</a>.<span class="cons_Constructor"><a href="#PlaceholderExp_2706_2720" id="PlaceholderExp_1952_1966" title="Referenced at line 98">PlaceholderExp</a></span> = &lt;<span class="cons_String">placeholder</span> &lt;<a href="../WebDSL-UI.sdf3#Exp_13248_13251" id="Exp_1983_1986" title="Defined at ../WebDSL-UI.sdf3 line 469, 517">Exp</a>&gt; <span class="cons_String">{</span>
    &lt;<a href="#TemplateElement_1537_1552" id="TemplateElement_1995_2010" title="Defined at line 57, 60, 82">TemplateElement</a>*&gt;
  <span class="cons_String">}</span>&gt;

  <a href="#PlaceholderWithAjaxCall_1646_1669" id="PlaceholderWithAjaxCall_2021_2044" title="Referenced at line 61">PlaceholderWithAjaxCall</a>.<span class="cons_Constructor"><span id="PlaceholderAjaxHtml_2045_2064" title="Not referenced locally, nor via imports">PlaceholderAjaxHtml</span></span> = &lt;<span class="cons_String">placeholder</span> \&lt; &lt;<a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_2084_2086" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; \&gt; &lt;<a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_2092_2094" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; &lt;<a href="../WebDSL-UI.sdf3#TemplateCall_241_253" id="TemplateCall_2097_2109" title="Defined at ../WebDSL-UI.sdf3 line 16, 77, 254, 275, 436, 451, 452, 453, 454, 455, 456, 466">TemplateCall</a>&gt;&gt;
  <a href="#PlaceholderWithAjaxCall_1646_1669" id="PlaceholderWithAjaxCall_2114_2137" title="Referenced at line 61">PlaceholderWithAjaxCall</a>.<span class="cons_Constructor"><span id="PlaceholderAjaxHtmlExp_2138_2160" title="Not referenced locally, nor via imports">PlaceholderAjaxHtmlExp</span></span> = &lt;<span class="cons_String">placeholder</span> \&lt; &lt;<a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_2180_2182" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; \&gt; &lt;<a href="#PHExp_2759_2764" id="PHExp_2188_2193" title="Defined at line 102, 106, 107, 108, 109, 110, 111">PHExp</a>&gt; &lt;<a href="../WebDSL-UI.sdf3#TemplateCall_241_253" id="TemplateCall_2196_2208" title="Defined at ../WebDSL-UI.sdf3 line 16, 77, 254, 275, 436, 451, 452, 453, 454, 455, 456, 466">TemplateCall</a>&gt;&gt;
  <a href="#PlaceholderWithAjaxCall_1646_1669" id="PlaceholderWithAjaxCall_2213_2236" title="Referenced at line 61">PlaceholderWithAjaxCall</a>.<span class="cons_Constructor"><span id="PlaceholderAjax_2237_2252" title="Not referenced locally, nor via imports">PlaceholderAjax</span></span> = &lt;<span class="cons_String">placeholder</span> &lt;<a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_2269_2271" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; &lt;<a href="../WebDSL-UI.sdf3#TemplateCall_241_253" id="TemplateCall_2274_2286" title="Defined at ../WebDSL-UI.sdf3 line 16, 77, 254, 275, 436, 451, 452, 453, 454, 455, 456, 466">TemplateCall</a>&gt;&gt;
  <a href="#PlaceholderWithAjaxCall_1646_1669" id="PlaceholderWithAjaxCall_2291_2314" title="Referenced at line 61">PlaceholderWithAjaxCall</a>.<span class="cons_Constructor"><span id="PlaceholderAjaxExp_2315_2333" title="Not referenced locally, nor via imports">PlaceholderAjaxExp</span></span> = &lt;<span class="cons_String">placeholder</span> &lt;<a href="#PHExp_2759_2764" id="PHExp_2350_2355" title="Defined at line 102, 106, 107, 108, 109, 110, 111">PHExp</a>&gt; &lt;<a href="../WebDSL-UI.sdf3#TemplateCall_241_253" id="TemplateCall_2358_2370" title="Defined at ../WebDSL-UI.sdf3 line 16, 77, 254, 275, 436, 451, 452, 453, 454, 455, 456, 466">TemplateCall</a>&gt;&gt;

  <a href="#TemplateElement_1995_2010" id="TemplateElement_2376_2391" title="Referenced at line 74">TemplateElement</a> = <a href="#PlaceholderVar_160_174" id="PlaceholderVar_2394_2408" title="Defined at line 11, 84">PlaceholderVar</a>

  <a href="#PlaceholderVar_2394_2408" id="PlaceholderVar_2412_2426" title="Referenced at line 82">PlaceholderVar</a>.<span class="cons_Constructor"><span id="PlaceholderVar_2427_2441" title="Not referenced locally, nor via imports">PlaceholderVar</span></span> = &lt;<span class="cons_String">placeholdervar</span> &lt;<a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_2461_2463" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt;&gt;

<span class="keyword">lexical syntax</span>

  <span id="TemplateId_2485_2495" title="Not referenced locally, nor via imports">TemplateId</span> = <span class="cons_Lit">"placeholder"</span> {<span class="keyword">reject</span>}
  <span id="TemplateId_2523_2533" title="Not referenced locally, nor via imports">TemplateId</span> = <span class="cons_Lit">"placeholdervar"</span> {<span class="keyword">reject</span>}

<span class="keyword">lexical restrictions</span>

  <span class="cons_Lit">"placeholder"</span> -/- [<span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>]

<span class="keyword">context-free priorities</span>

  <a href="#Placeholder_124_135" id="Placeholder_2645_2656" title="Defined at line 11, 64, 67, 70, 73">Placeholder</a>.<span class="cons_Constructor"><a href="#PlaceholderHtmlExp_1781_1799" id="PlaceholderHtmlExp_2657_2675" title="Defined at line 67">PlaceholderHtmlExp</a></span> &lt;4&gt; .&gt; <a href="../WebDSL-UI.sdf3#Exp_13248_13251" id="Exp_2683_2686" title="Defined at ../WebDSL-UI.sdf3 line 469, 517">Exp</a>.<span class="cons_Constructor"><a href="../WebDSL-Action.sdf3#Var_3701_3704" id="Var_2687_2690" title="Defined at ../WebDSL-Action.sdf3 line 190">Var</a></span>,
  <a href="#Placeholder_124_135" id="Placeholder_2694_2705" title="Defined at line 11, 64, 67, 70, 73">Placeholder</a>.<span class="cons_Constructor"><a href="#PlaceholderExp_1952_1966" id="PlaceholderExp_2706_2720" title="Defined at line 73">PlaceholderExp</a></span> &lt;1&gt; .&gt; <a href="../WebDSL-UI.sdf3#Exp_13248_13251" id="Exp_2728_2731" title="Defined at ../WebDSL-UI.sdf3 line 469, 517">Exp</a>.<span class="cons_Constructor"><a href="../WebDSL-Action.sdf3#Var_3701_3704" id="Var_2732_2735" title="Defined at ../WebDSL-Action.sdf3 line 190">Var</a></span>

<span class="keyword">context-free sorts</span>

  <a href="#PHExp_2350_2355" id="PHExp_2759_2764" title="Referenced at line 80">PHExp</a>

<span class="keyword">context-free syntax</span>

  <a href="#PHExp_2350_2355" id="PHExp_2789_2794" title="Referenced at line 80">PHExp</a>.<span class="cons_Constructor"><span id="PHThisCall_2795_2805" title="Not referenced locally, nor via imports">PHThisCall</span></span> = <a href="#ThisCall_1105_1113" id="ThisCall_2808_2816" title="Defined at line 46, 47, 48, 49, 50, 51, 52, 53">ThisCall</a>
  <a href="#PHExp_2350_2355" id="PHExp_2819_2824" title="Referenced at line 80">PHExp</a>.<span class="cons_Constructor"><span id="PHCall_2825_2831" title="Not referenced locally, nor via imports">PHCall</span></span> = &lt;&lt;<a href="../WebDSL-UI.sdf3#Exp_13248_13251" id="Exp_2836_2839" title="Defined at ../WebDSL-UI.sdf3 line 469, 517">Exp</a>&gt; <span class="cons_String">.</span> &lt;<a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_2844_2846" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; <span class="cons_String">(</span> &lt;{<a href="../WebDSL-UI.sdf3#Exp_13248_13251" id="Exp_2852_2855" title="Defined at ../WebDSL-UI.sdf3 line 469, 517">Exp</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span>&gt;
  <a href="#PHExp_2350_2355" id="PHExp_2868_2873" title="Referenced at line 80">PHExp</a>.<span class="cons_Constructor"><span id="PHFieldAccess_2874_2887" title="Not referenced locally, nor via imports">PHFieldAccess</span></span> = &lt;&lt;<a href="../WebDSL-UI.sdf3#Exp_13248_13251" id="Exp_2892_2895" title="Defined at ../WebDSL-UI.sdf3 line 469, 517">Exp</a>&gt; <span class="cons_String">.</span> &lt;<a href="../WebDSL-Lexical.sdf3#PropertyId_75_85" id="PropertyId_2900_2910" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 15">PropertyId</a>&gt;&gt;
  <a href="#PHExp_2350_2355" id="PHExp_2915_2920" title="Referenced at line 80">PHExp</a>.<span class="cons_Constructor"><span id="PHCollectionIndex_2921_2938" title="Not referenced locally, nor via imports">PHCollectionIndex</span></span> = &lt;&lt;<a href="../WebDSL-UI.sdf3#Exp_13248_13251" id="Exp_2943_2946" title="Defined at ../WebDSL-UI.sdf3 line 469, 517">Exp</a>&gt; <span class="cons_String">[</span> &lt;<a href="../WebDSL-UI.sdf3#Exp_13248_13251" id="Exp_2951_2954" title="Defined at ../WebDSL-UI.sdf3 line 469, 517">Exp</a>&gt; <span class="cons_String">]</span>&gt;
  <a href="#PHExp_2350_2355" id="PHExp_2961_2966" title="Referenced at line 80">PHExp</a>.<span class="cons_Constructor"><span id="PHAdd_2967_2972" title="Not referenced locally, nor via imports">PHAdd</span></span> = &lt;&lt;<a href="../WebDSL-UI.sdf3#Exp_13248_13251" id="Exp_2977_2980" title="Defined at ../WebDSL-UI.sdf3 line 469, 517">Exp</a>&gt; <span class="cons_String">+</span> &lt;<a href="../WebDSL-UI.sdf3#Exp_13248_13251" id="Exp_2985_2988" title="Defined at ../WebDSL-UI.sdf3 line 469, 517">Exp</a>&gt;&gt;
  <a href="#PHExp_2350_2355" id="PHExp_2993_2998" title="Referenced at line 80">PHExp</a>.<span class="cons_Constructor"><span id="PHConst_2999_3006" title="Not referenced locally, nor via imports">PHConst</span></span> = <a href="../WebDSL-Action.sdf3#ConstValue_3459_3469" id="ConstValue_3009_3019" title="Defined at ../WebDSL-Action.sdf3 line 179, 185, 186, 187, 188">ConstValue</a>

</code></pre></td></tr></tbody></table></div>