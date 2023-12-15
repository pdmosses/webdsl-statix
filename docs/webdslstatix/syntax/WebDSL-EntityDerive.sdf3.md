---
title: WebDSL-EntityDerive.sdf3
hide:
  - toc
---

# `WebDSL-EntityDerive.sdf3`

:simple-github: [pdmosses/webdsl-statix/webdslstatix/syntax/WebDSL-EntityDerive.sdf3]

[pdmosses/webdsl-statix/webdslstatix/syntax/WebDSL-EntityDerive.sdf3]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/syntax/WebDSL-EntityDerive.sdf3 "The source file on GitHub"

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
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl-statix.sdf3/#WebDSL-EntityDerive_12_3" id="WebDSL-EntityDerive_1_8" title="Referenced at ../webdsl-statix.sdf3 line 12">WebDSL-EntityDerive</a>

<span class="keyword">imports</span>
  <a href="../WebDSL-Action.sdf3/#WebDSL-Action_1_8" id="WebDSL-Action_4_3" title="Defined at ../WebDSL-Action.sdf3 line 1">WebDSL-Action</a>
  <a href="../WebDSL-Core.sdf3/#WebDSL-Core_1_8" id="WebDSL-Core_5_3" title="Defined at ../WebDSL-Core.sdf3 line 1">WebDSL-Core</a>
  <a href="../WebDSL-Lexical.sdf3/#WebDSL-Lexical_1_8" id="WebDSL-Lexical_6_3" title="Defined at ../WebDSL-Lexical.sdf3 line 1">WebDSL-Lexical</a>
  <a href="../WebDSL-UI.sdf3/#WebDSL-UI_1_8" id="WebDSL-UI_7_3" title="Defined at ../WebDSL-UI.sdf3 line 1">WebDSL-UI</a>

<span class="keyword">context-free sorts</span>

  <a href="#ExpEntityDeriveProp_15_49" id="ExpEntityDeriveProp_11_3" title="Referenced at line 15">ExpEntityDeriveProp</a>

<span class="keyword">context-free syntax</span>

  <span id="TemplateArgExp_15_3" title="Not referenced">TemplateArgExp</span>.<span class="cons_Constructor"><span id="ExpEntityDerive_15_18" title="Not referenced">ExpEntityDerive</span></span> = &lt;&lt;<a href="../WebDSL-UI.sdf3/#Exp_469_3" id="Exp_15_38" title="Defined at ../WebDSL-UI.sdf3 line 469, 517">Exp</a>&gt; <span class="cons_String">with</span> &lt;<a href="#ExpEntityDeriveProp_11_3" id="ExpEntityDeriveProp_15_49" title="Defined at line 11, 16">ExpEntityDeriveProp</a>*&gt;&gt;
  <a href="#ExpEntityDeriveProp_15_49" id="ExpEntityDeriveProp_16_3" title="Referenced at line 15">ExpEntityDeriveProp</a>.<span class="cons_Constructor"><span id="ExpEntityDeriveProp_16_23" title="Not referenced">ExpEntityDeriveProp</span></span> = &lt;&lt;<a href="#DeriveArgPropId_33_3" id="DeriveArgPropId_16_47" title="Defined at line 33, 37, 38, 39, 40, 41, 42">DeriveArgPropId</a>&gt; &lt;<a href="../WebDSL-Core.sdf3/#OptCallArgs_10_83" id="OptCallArgs_16_65" title="Defined at ../WebDSL-Core.sdf3 line 10, 40, 41">OptCallArgs</a>&gt;&gt;

  <span id="Sort_18_3" title="Not referenced">Sort</span>.<span class="cons_Constructor"><span id="ArgEntityDerive_18_8" title="Not referenced">ArgEntityDerive</span></span> = &lt;&lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_18_28" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; <span class="cons_String">with</span> &lt;<a href="#DeriveArgPropId_33_3" id="DeriveArgPropId_18_38" title="Defined at line 33, 37, 38, 39, 40, 41, 42">DeriveArgPropId</a>&gt; &lt;<a href="../WebDSL-Core.sdf3/#OptFormalArgs_10_13" id="OptFormalArgs_18_56" title="Defined at ../WebDSL-Core.sdf3 line 10, 37, 38">OptFormalArgs</a>&gt;&gt;

  <a href="#TemplateElement_22_8" id="TemplateElement_20_3" title="Referenced at line 22">TemplateElement</a>.<span class="cons_Constructor"><span id="ForeachElementEntityDerive_20_19" title="Not referenced">ForeachElementEntityDerive</span></span> = &lt;
    <span class="cons_String">foreach</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_21_14" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; <span class="cons_String">{</span>
      &lt;<a href="#TemplateElement_20_3" id="TemplateElement_22_8" title="Defined at line 20">TemplateElement</a>*&gt;
    <span class="cons_String">}</span>
  &gt;
  <a href="#Statement_27_8" id="Statement_25_3" title="Referenced at line 27">Statement</a>.<span class="cons_Constructor"><span id="ForeachStatementEntityDerive_25_13" title="Not referenced">ForeachStatementEntityDerive</span></span> = &lt;
    <span class="cons_String">foreach</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_26_14" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; <span class="cons_String">{</span>
      &lt;<a href="#Statement_25_3" id="Statement_27_8" title="Defined at line 25">Statement</a>*&gt;
    <span class="cons_String">}</span>
  &gt;

<span class="keyword">lexical sorts</span>

  <a href="#DeriveArgPropId_16_47" id="DeriveArgPropId_33_3" title="Referenced at line 16, 18">DeriveArgPropId</a>

<span class="keyword">lexical syntax</span>

  <a href="#DeriveArgPropId_16_47" id="DeriveArgPropId_37_3" title="Referenced at line 16, 18">DeriveArgPropId</a> = <a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_37_21" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>
  <a href="#DeriveArgPropId_16_47" id="DeriveArgPropId_38_3" title="Referenced at line 16, 18">DeriveArgPropId</a> = <span class="cons_Lit">"filter"</span> {<span class="keyword">reject</span>}
  <a href="#DeriveArgPropId_16_47" id="DeriveArgPropId_39_3" title="Referenced at line 16, 18">DeriveArgPropId</a> = <span class="cons_Lit">"filters"</span> {<span class="keyword">reject</span>}
  <a href="#DeriveArgPropId_16_47" id="DeriveArgPropId_40_3" title="Referenced at line 16, 18">DeriveArgPropId</a> = <span class="cons_Lit">"facet"</span> {<span class="keyword">reject</span>}
  <a href="#DeriveArgPropId_16_47" id="DeriveArgPropId_41_3" title="Referenced at line 16, 18">DeriveArgPropId</a> = <span class="cons_Lit">"facets"</span> {<span class="keyword">reject</span>}
  <a href="#DeriveArgPropId_16_47" id="DeriveArgPropId_42_3" title="Referenced at line 16, 18">DeriveArgPropId</a> = <span class="cons_Lit">"tags"</span> {<span class="keyword">reject</span>}

  <span id="TemplateId_44_3" title="Not referenced">TemplateId</span> = <span class="cons_Lit">"foreach"</span> {<span class="keyword">reject</span>}

</code></pre></td></tr></tbody></table></div>

<div id="modal">
  <div id="modal-content">
    <span id="modal-close">&times;</span>
    <h2 id="modal-h2"></h2>
    <p  id="modal-p"></p>
    <ul id="modal-ul"></ul>
  </div>
</div>
