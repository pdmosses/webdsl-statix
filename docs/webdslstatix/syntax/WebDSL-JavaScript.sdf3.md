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
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl-statix.sdf3/#WebDSL-JavaScript_16_3" id="WebDSL-JavaScript_1_8" title="a definition with a single reference">WebDSL-JavaScript</a>

<span class="keyword">imports</span>
  <a href="../WebDSL-Action.sdf3/#WebDSL-Action_1_8" id="WebDSL-Action_4_3" title="a reference to a single-file definition">WebDSL-Action</a>
  <a href="../WebDSL-Attributes.sdf3/#WebDSL-Attributes_1_8" id="WebDSL-Attributes_5_3" title="a reference to a single-file definition">WebDSL-Attributes</a>
  <a href="../WebDSL-UI.sdf3/#WebDSL-UI_1_8" id="WebDSL-UI_6_3" title="a reference to a single-file definition">WebDSL-UI</a>
  <a href="../WebDSL-XML.sdf3/#WebDSL-XML_1_8" id="WebDSL-XML_7_3" title="a reference to a single-file definition">WebDSL-XML</a>

<span class="keyword">context-free syntax</span>

  <span id="TemplateElement_11_3" title="a definition with no references">TemplateElement</span>.<span class="cons_Constructor"><span id="JSElement_11_19" title="a definition with no references">JSElement</span></span> = &lt;
    \&lt; <span class="cons_String">script</span> &lt;<a href="../WebDSL-Attributes.sdf3/#Attribute_11_87" id="Attribute_12_16" title="a reference to a single-file definition">Attribute</a>*&gt; \&gt;
      &lt;<a href="#JSPart_24_3" id="JSPart_13_8" title="a reference to a single-file definition">JSPart</a>*&gt;
    \&lt;<span class="cons_String">/</span> <span class="cons_String">script</span> \&gt;
  &gt;
  <span id="TemplateElement_16_3" title="a definition with no references">TemplateElement</span>.<span class="cons_Constructor"><span id="StyleElement_16_19" title="a definition with no references">StyleElement</span></span> = &lt;
    \&lt; <span class="cons_String">style</span> &lt;<a href="../WebDSL-Attributes.sdf3/#Attribute_11_87" id="Attribute_17_15" title="a reference to a single-file definition">Attribute</a>*&gt; \&gt;
      &lt;<a href="#JSPart_24_3" id="JSPart_18_8" title="a reference to a single-file definition">JSPart</a>*&gt;
    \&lt;<span class="cons_String">/</span> <span class="cons_String">style</span> \&gt;
  &gt;

<span class="keyword">context-free sorts</span>

  <button class="modal-open" id="JSPart_24_3" title="a definition with multiple references" data-urls="#JSPart line 13_8, 18_8">JSPart</button>

<span class="keyword">syntax</span>

  <button class="modal-open" id="JSPart_28_3" title="a definition with multiple references" data-urls="#JSPart line 13_8, 18_8">JSPart</button><span class="keyword">-CF</span>.<span class="cons_Constructor"><span id="JSExp_28_13" title="a definition with no references">JSExp</span></span> = <span class="cons_Lit">"~"</span> <a href="../WebDSL-UI.sdf3/#Exp_469_3" id="Exp_28_25" title="a reference to a single-file definition">Exp</a><span class="keyword">-CF</span>
  <button class="modal-open" id="JSPart_29_3" title="a definition with multiple references" data-urls="#JSPart line 13_8, 18_8">JSPart</button><span class="keyword">-CF</span>.<span class="cons_Constructor"><span id="JSString_29_13" title="a definition with no references">JSString</span></span> = <a href="#JSString_33_10" id="JSString_29_24" title="a reference to a single-file definition">JSString</a><span class="keyword">-LEX</span>

<span class="keyword">lexical sorts</span>

  <button class="modal-open" id="JSChar_33_3" title="a definition with multiple references" data-urls="#JSChar line 37_14, 38_14">JSChar</button> <button class="modal-open" id="JSString_33_10" title="a definition with multiple references" data-urls="#JSString line 29_24, 54_3, 55_3">JSString</button> <button class="modal-open" id="JSSmallerThan_33_19" title="a definition with multiple references" data-urls="#JSSmallerThan line 42_12, 53_3">JSSmallerThan</button> <a href="#JSTilde_45_12" id="JSTilde_33_33" title="a definition with a single reference">JSTilde</a>

<span class="keyword">lexical syntax</span>

  <button class="modal-open" id="JSString_37_3" title="a definition with multiple references" data-urls="#JSString line 29_24, 54_3, 55_3">JSString</button> = <a href="#JSChar_33_3" id="JSChar_37_14" title="a reference to a single-file definition">JSChar</a>+
  <button class="modal-open" id="JSString_38_3" title="a definition with multiple references" data-urls="#JSString line 29_24, 54_3, 55_3">JSString</button> = <a href="#JSChar_33_3" id="JSChar_38_14" title="a reference to a single-file definition">JSChar</a>* <span class="cons_Lit">"\\"</span> {<span class="keyword">reject</span>}

  <button class="modal-open" id="JSChar_40_3" title="a definition with multiple references" data-urls="#JSChar line 37_14, 38_14">JSChar</button> = ~[\&lt;\~]

  <button class="modal-open" id="JSChar_42_3" title="a definition with multiple references" data-urls="#JSChar line 37_14, 38_14">JSChar</button> = <a href="#JSSmallerThan_33_19" id="JSSmallerThan_42_12" title="a reference to a single-file definition">JSSmallerThan</a>
  <button class="modal-open" id="JSSmallerThan_43_3" title="a definition with multiple references" data-urls="#JSSmallerThan line 42_12, 53_3">JSSmallerThan</button> = [\&lt;]

  <button class="modal-open" id="JSChar_45_3" title="a definition with multiple references" data-urls="#JSChar line 37_14, 38_14">JSChar</button> = <a href="#JSTilde_33_33" id="JSTilde_45_12" title="a reference to a single-file definition">JSTilde</a>
  <a href="#JSTilde_45_12" id="JSTilde_46_3" title="a definition with a single reference">JSTilde</a> = <span class="cons_Lit">"\\~"</span>

  <span id="XMLTagName_48_3" title="a definition with no references">XMLTagName</span> = <span class="cons_Lit">"script"</span> {<span class="keyword">reject</span>}
  <span id="XMLTagName_49_3" title="a definition with no references">XMLTagName</span> = <span class="cons_Lit">"style"</span> {<span class="keyword">reject</span>}

<span class="keyword">lexical restrictions</span>

  <a href="#JSSmallerThan_33_19" id="JSSmallerThan_53_3" title="a reference to a single-file definition">JSSmallerThan</a> -/- [\/]
  <a href="#JSString_33_10" id="JSString_54_3" title="a reference to a single-file definition">JSString</a> -/- ~[\&lt;\~]
  <a href="#JSString_33_10" id="JSString_55_3" title="a reference to a single-file definition">JSString</a> -/- [\&lt;] . ~[\/]

</code></pre></td></tr></tbody></table></div>

<div id="modal">
  <div id="modal-content">
    <span id="modal-close">&times;</span>
    <h2 id="modal-h2"></h2>
    <p  id="modal-p"></p>
    <ul id="modal-ul"></ul>
  </div>
</div>
