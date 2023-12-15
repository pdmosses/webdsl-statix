---
title: WebDSL-JavaScript.sdf3
hide:
  - toc
---

# `WebDSL-JavaScript.sdf3`

:simple-github: [pdmosses/webdsl-statix/webdslstatix/syntax/WebDSL-JavaScript.sdf3]

[pdmosses/webdsl-statix/webdslstatix/syntax/WebDSL-JavaScript.sdf3]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/syntax/WebDSL-JavaScript.sdf3 "The source file on GitHub"

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
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl-statix.sdf3/#WebDSL-JavaScript_16_3" id="WebDSL-JavaScript_1_8" title="Referenced at ../webdsl-statix.sdf3 line 16">WebDSL-JavaScript</a>

<span class="keyword">imports</span>
  <a href="../WebDSL-Action.sdf3/#WebDSL-Action_1_8" id="WebDSL-Action_4_3" title="Defined at ../WebDSL-Action.sdf3 line 1">WebDSL-Action</a>
  <a href="../WebDSL-Attributes.sdf3/#WebDSL-Attributes_1_8" id="WebDSL-Attributes_5_3" title="Defined at ../WebDSL-Attributes.sdf3 line 1">WebDSL-Attributes</a>
  <a href="../WebDSL-UI.sdf3/#WebDSL-UI_1_8" id="WebDSL-UI_6_3" title="Defined at ../WebDSL-UI.sdf3 line 1">WebDSL-UI</a>
  <a href="../WebDSL-XML.sdf3/#WebDSL-XML_1_8" id="WebDSL-XML_7_3" title="Defined at ../WebDSL-XML.sdf3 line 1">WebDSL-XML</a>

<span class="keyword">context-free syntax</span>

  <span id="TemplateElement_11_3" title="Not referenced">TemplateElement</span>.<span class="cons_Constructor"><span id="JSElement_11_19" title="Not referenced">JSElement</span></span> = &lt;
    \&lt; <span class="cons_String">script</span> &lt;<a href="../WebDSL-Attributes.sdf3/#Attribute_11_87" id="Attribute_12_16" title="Defined at ../WebDSL-Attributes.sdf3 line 11, 44">Attribute</a>*&gt; \&gt;
      &lt;<a href="#JSPart_24_3" id="JSPart_13_8" title="Defined at line 24, 28, 29">JSPart</a>*&gt;
    \&lt;<span class="cons_String">/</span> <span class="cons_String">script</span> \&gt;
  &gt;
  <span id="TemplateElement_16_3" title="Not referenced">TemplateElement</span>.<span class="cons_Constructor"><span id="StyleElement_16_19" title="Not referenced">StyleElement</span></span> = &lt;
    \&lt; <span class="cons_String">style</span> &lt;<a href="../WebDSL-Attributes.sdf3/#Attribute_11_87" id="Attribute_17_15" title="Defined at ../WebDSL-Attributes.sdf3 line 11, 44">Attribute</a>*&gt; \&gt;
      &lt;<a href="#JSPart_24_3" id="JSPart_18_8" title="Defined at line 24, 28, 29">JSPart</a>*&gt;
    \&lt;<span class="cons_String">/</span> <span class="cons_String">style</span> \&gt;
  &gt;

<span class="keyword">context-free sorts</span>

  <a href="#JSPart_13_8" id="JSPart_24_3" title="Referenced at line 13, 18">JSPart</a>

<span class="keyword">syntax</span>

  <a href="#JSPart_13_8" id="JSPart_28_3" title="Referenced at line 13, 18">JSPart</a><span class="keyword">-CF</span>.<span class="cons_Constructor"><span id="JSExp_28_13" title="Not referenced">JSExp</span></span> = <span class="cons_Lit">"~"</span> <a href="../WebDSL-UI.sdf3/#Exp_469_3" id="Exp_28_25" title="Defined at ../WebDSL-UI.sdf3 line 469, 517">Exp</a><span class="keyword">-CF</span>
  <a href="#JSPart_13_8" id="JSPart_29_3" title="Referenced at line 13, 18">JSPart</a><span class="keyword">-CF</span>.<span class="cons_Constructor"><span id="JSString_29_13" title="Not referenced">JSString</span></span> = <a href="#JSString_33_10" id="JSString_29_24" title="Defined at line 33, 37, 38">JSString</a><span class="keyword">-LEX</span>

<span class="keyword">lexical sorts</span>

  <a href="#JSChar_37_14" id="JSChar_33_3" title="Referenced at line 37, 38">JSChar</a> <a href="#JSString_29_24" id="JSString_33_10" title="Referenced at line 29, 54, 55">JSString</a> <a href="#JSSmallerThan_42_12" id="JSSmallerThan_33_19" title="Referenced at line 42, 53">JSSmallerThan</a> <a href="#JSTilde_45_12" id="JSTilde_33_33" title="Referenced at line 45">JSTilde</a>

<span class="keyword">lexical syntax</span>

  <a href="#JSString_29_24" id="JSString_37_3" title="Referenced at line 29, 54, 55">JSString</a> = <a href="#JSChar_33_3" id="JSChar_37_14" title="Defined at line 33, 40, 42, 45">JSChar</a>+
  <a href="#JSString_29_24" id="JSString_38_3" title="Referenced at line 29, 54, 55">JSString</a> = <a href="#JSChar_33_3" id="JSChar_38_14" title="Defined at line 33, 40, 42, 45">JSChar</a>* <span class="cons_Lit">"\\"</span> {<span class="keyword">reject</span>}

  <a href="#JSChar_37_14" id="JSChar_40_3" title="Referenced at line 37, 38">JSChar</a> = ~[\&lt;\~]

  <a href="#JSChar_37_14" id="JSChar_42_3" title="Referenced at line 37, 38">JSChar</a> = <a href="#JSSmallerThan_33_19" id="JSSmallerThan_42_12" title="Defined at line 33, 43">JSSmallerThan</a>
  <a href="#JSSmallerThan_42_12" id="JSSmallerThan_43_3" title="Referenced at line 42, 53">JSSmallerThan</a> = [\&lt;]

  <a href="#JSChar_37_14" id="JSChar_45_3" title="Referenced at line 37, 38">JSChar</a> = <a href="#JSTilde_33_33" id="JSTilde_45_12" title="Defined at line 33, 46">JSTilde</a>
  <a href="#JSTilde_45_12" id="JSTilde_46_3" title="Referenced at line 45">JSTilde</a> = <span class="cons_Lit">"\\~"</span>

  <span id="XMLTagName_48_3" title="Not referenced">XMLTagName</span> = <span class="cons_Lit">"script"</span> {<span class="keyword">reject</span>}
  <span id="XMLTagName_49_3" title="Not referenced">XMLTagName</span> = <span class="cons_Lit">"style"</span> {<span class="keyword">reject</span>}

<span class="keyword">lexical restrictions</span>

  <a href="#JSSmallerThan_33_19" id="JSSmallerThan_53_3" title="Defined at line 33, 43">JSSmallerThan</a> -/- [\/]
  <a href="#JSString_33_10" id="JSString_54_3" title="Defined at line 33, 37, 38">JSString</a> -/- ~[\&lt;\~]
  <a href="#JSString_33_10" id="JSString_55_3" title="Defined at line 33, 37, 38">JSString</a> -/- [\&lt;] . ~[\/]

</code></pre></td></tr></tbody></table></div>

<div id="modal">
  <div id="modal-content">
    <span id="modal-close">&times;</span>
    <h2 id="modal-h2"></h2>
    <p  id="modal-p"></p>
    <ul id="modal-ul"></ul>
  </div>
</div>
