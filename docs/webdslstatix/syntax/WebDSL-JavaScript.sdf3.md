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
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl-statix.sdf3/#WebDSL-JavaScript_256_273" id="WebDSL-JavaScript_7_24" title="Referenced at ../webdsl-statix.sdf3 line 16">WebDSL-JavaScript</a>

<span class="keyword">imports</span>
  <a href="../WebDSL-Action.sdf3/#WebDSL-Action_7_20" id="WebDSL-Action_36_49" title="Defined at ../WebDSL-Action.sdf3 line 1">WebDSL-Action</a>
  <a href="../WebDSL-Attributes.sdf3/#WebDSL-Attributes_7_24" id="WebDSL-Attributes_52_69" title="Defined at ../WebDSL-Attributes.sdf3 line 1">WebDSL-Attributes</a>
  <a href="../WebDSL-UI.sdf3/#WebDSL-UI_7_16" id="WebDSL-UI_72_81" title="Defined at ../WebDSL-UI.sdf3 line 1">WebDSL-UI</a>
  <a href="../WebDSL-XML.sdf3/#WebDSL-XML_7_17" id="WebDSL-XML_84_94" title="Defined at ../WebDSL-XML.sdf3 line 1">WebDSL-XML</a>

<span class="keyword">context-free syntax</span>

  <span id="TemplateElement_119_134" title="Not referenced locally, nor via imports">TemplateElement</span>.<span class="cons_Constructor"><span id="JSElement_135_144" title="Not referenced locally, nor via imports">JSElement</span></span> = &lt;
    \&lt; <span class="cons_String">script</span> &lt;<a href="../WebDSL-Attributes.sdf3/#Attribute_200_209" id="Attribute_164_173" title="Defined at ../WebDSL-Attributes.sdf3 line 11, 44">Attribute</a>*&gt; \&gt;
      &lt;<a href="#JSPart_341_347" id="JSPart_186_192" title="Defined at line 24, 28, 29">JSPart</a>*&gt;
    \&lt;<span class="cons_String">/</span> <span class="cons_String">script</span> \&gt;
  &gt;
  <span id="TemplateElement_219_234" title="Not referenced locally, nor via imports">TemplateElement</span>.<span class="cons_Constructor"><span id="StyleElement_235_247" title="Not referenced locally, nor via imports">StyleElement</span></span> = &lt;
    \&lt; <span class="cons_String">style</span> &lt;<a href="../WebDSL-Attributes.sdf3/#Attribute_200_209" id="Attribute_266_275" title="Defined at ../WebDSL-Attributes.sdf3 line 11, 44">Attribute</a>*&gt; \&gt;
      &lt;<a href="#JSPart_341_347" id="JSPart_288_294" title="Defined at line 24, 28, 29">JSPart</a>*&gt;
    \&lt;<span class="cons_String">/</span> <span class="cons_String">style</span> \&gt;
  &gt;

<span class="keyword">context-free sorts</span>

  <a href="#JSPart_186_192" id="JSPart_341_347" title="Referenced at line 13, 18">JSPart</a>

<span class="keyword">syntax</span>

  <a href="#JSPart_186_192" id="JSPart_359_365" title="Referenced at line 13, 18">JSPart</a><span class="keyword">-CF</span>.<span class="cons_Constructor"><span id="JSExp_369_374" title="Not referenced locally, nor via imports">JSExp</span></span> = <span class="cons_Lit">"~"</span> <a href="../WebDSL-UI.sdf3/#Exp_13248_13251" id="Exp_381_384" title="Defined at ../WebDSL-UI.sdf3 line 469, 517">Exp</a><span class="keyword">-CF</span>
  <a href="#JSPart_186_192" id="JSPart_390_396" title="Referenced at line 13, 18">JSPart</a><span class="keyword">-CF</span>.<span class="cons_Constructor"><span id="JSString_400_408" title="Not referenced locally, nor via imports">JSString</span></span> = <a href="#JSString_449_457" id="JSString_411_419" title="Defined at line 33, 37, 38">JSString</a><span class="keyword">-LEX</span>

<span class="keyword">lexical sorts</span>

  <a href="#JSChar_510_516" id="JSChar_442_448" title="Referenced at line 37, 38">JSChar</a> <a href="#JSString_411_419" id="JSString_449_457" title="Referenced at line 29, 54, 55">JSString</a> <a href="#JSSmallerThan_585_598" id="JSSmallerThan_458_471" title="Referenced at line 42, 53">JSSmallerThan</a> <a href="#JSTilde_634_641" id="JSTilde_472_479" title="Referenced at line 45">JSTilde</a>

<span class="keyword">lexical syntax</span>

  <a href="#JSString_411_419" id="JSString_499_507" title="Referenced at line 29, 54, 55">JSString</a> = <a href="#JSChar_442_448" id="JSChar_510_516" title="Defined at line 33, 40, 42, 45">JSChar</a>+
  <a href="#JSString_411_419" id="JSString_520_528" title="Referenced at line 29, 54, 55">JSString</a> = <a href="#JSChar_442_448" id="JSChar_531_537" title="Defined at line 33, 40, 42, 45">JSChar</a>* <span class="cons_Lit">"\\"</span> {<span class="keyword">reject</span>}

  <a href="#JSChar_510_516" id="JSChar_556_562" title="Referenced at line 37, 38">JSChar</a> = ~[\&lt;\~]

  <a href="#JSChar_510_516" id="JSChar_576_582" title="Referenced at line 37, 38">JSChar</a> = <a href="#JSSmallerThan_458_471" id="JSSmallerThan_585_598" title="Defined at line 33, 43">JSSmallerThan</a>
  <a href="#JSSmallerThan_585_598" id="JSSmallerThan_601_614" title="Referenced at line 42, 53">JSSmallerThan</a> = [\&lt;]

  <a href="#JSChar_510_516" id="JSChar_625_631" title="Referenced at line 37, 38">JSChar</a> = <a href="#JSTilde_472_479" id="JSTilde_634_641" title="Defined at line 33, 46">JSTilde</a>
  <a href="#JSTilde_634_641" id="JSTilde_644_651" title="Referenced at line 45">JSTilde</a> = <span class="cons_Lit">"\\~"</span>

  <span id="XMLTagName_663_673" title="Not referenced locally, nor via imports">XMLTagName</span> = <span class="cons_Lit">"script"</span> {<span class="keyword">reject</span>}
  <span id="XMLTagName_696_706" title="Not referenced locally, nor via imports">XMLTagName</span> = <span class="cons_Lit">"style"</span> {<span class="keyword">reject</span>}

<span class="keyword">lexical restrictions</span>

  <a href="#JSSmallerThan_458_471" id="JSSmallerThan_751_764" title="Defined at line 33, 43">JSSmallerThan</a> -/- [\/]
  <a href="#JSString_449_457" id="JSString_776_784" title="Defined at line 33, 37, 38">JSString</a> -/- ~[\&lt;\~]
  <a href="#JSString_449_457" id="JSString_799_807" title="Defined at line 33, 37, 38">JSString</a> -/- [\&lt;] . ~[\/]

</code></pre></td></tr></tbody></table></div>