---
title: WebDSL-EntityDerive.sdf3
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
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl-statix.sdf3#WebDSL-EntityDerive_180_199" id="WebDSL-EntityDerive_7_26" title="Referenced at ../webdsl-statix.sdf3 line 12">WebDSL-EntityDerive</a>

<span class="keyword">imports</span>
  <a href="../WebDSL-Action.sdf3#WebDSL-Action_7_20" id="WebDSL-Action_38_51" title="Defined at ../WebDSL-Action.sdf3 line 1">WebDSL-Action</a>
  <a href="../WebDSL-Core.sdf3#WebDSL-Core_7_18" id="WebDSL-Core_54_65" title="Defined at ../WebDSL-Core.sdf3 line 1">WebDSL-Core</a>
  <a href="../WebDSL-Lexical.sdf3#WebDSL-Lexical_7_21" id="WebDSL-Lexical_68_82" title="Defined at ../WebDSL-Lexical.sdf3 line 1">WebDSL-Lexical</a>
  <a href="../WebDSL-UI.sdf3#WebDSL-UI_7_16" id="WebDSL-UI_85_94" title="Defined at ../WebDSL-UI.sdf3 line 1">WebDSL-UI</a>

<span class="keyword">context-free sorts</span>

  <a href="#ExpEntityDeriveProp_208_227" id="ExpEntityDeriveProp_118_137" title="Referenced at line 15">ExpEntityDeriveProp</a>

<span class="keyword">context-free syntax</span>

  <span id="TemplateArgExp_162_176" title="Not referenced locally, nor via imports">TemplateArgExp</span>.<span class="cons_Constructor"><span id="ExpEntityDerive_177_192" title="Not referenced locally, nor via imports">ExpEntityDerive</span></span> = &lt;&lt;<a href="../WebDSL-UI.sdf3#Exp_13248_13251" id="Exp_197_200" title="Defined at ../WebDSL-UI.sdf3 line 469, 517">Exp</a>&gt; <span class="cons_String">with</span> &lt;<a href="#ExpEntityDeriveProp_118_137" id="ExpEntityDeriveProp_208_227" title="Defined at line 11, 16">ExpEntityDeriveProp</a>*&gt;&gt;
  <a href="#ExpEntityDeriveProp_208_227" id="ExpEntityDeriveProp_233_252" title="Referenced at line 15">ExpEntityDeriveProp</a>.<span class="cons_Constructor"><span id="ExpEntityDeriveProp_253_272" title="Not referenced locally, nor via imports">ExpEntityDeriveProp</span></span> = &lt;&lt;<a href="#DeriveArgPropId_596_611" id="DeriveArgPropId_277_292" title="Defined at line 33, 37, 38, 39, 40, 41, 42">DeriveArgPropId</a>&gt; &lt;<a href="../WebDSL-Core.sdf3#OptCallArgs_183_194" id="OptCallArgs_295_306" title="Defined at ../WebDSL-Core.sdf3 line 10, 40, 41">OptCallArgs</a>&gt;&gt;

  <span id="Sort_312_316" title="Not referenced locally, nor via imports">Sort</span>.<span class="cons_Constructor"><span id="ArgEntityDerive_317_332" title="Not referenced locally, nor via imports">ArgEntityDerive</span></span> = &lt;&lt;<a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_337_339" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; <span class="cons_String">with</span> &lt;<a href="#DeriveArgPropId_596_611" id="DeriveArgPropId_347_362" title="Defined at line 33, 37, 38, 39, 40, 41, 42">DeriveArgPropId</a>&gt; &lt;<a href="../WebDSL-Core.sdf3#OptFormalArgs_113_126" id="OptFormalArgs_365_378" title="Defined at ../WebDSL-Core.sdf3 line 10, 37, 38">OptFormalArgs</a>&gt;&gt;

  <a href="#TemplateElement_457_472" id="TemplateElement_384_399" title="Referenced at line 22">TemplateElement</a>.<span class="cons_Constructor"><span id="ForeachElementEntityDerive_400_426" title="Not referenced locally, nor via imports">ForeachElementEntityDerive</span></span> = &lt;
    <span class="cons_String">foreach</span> &lt;<a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_444_446" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; <span class="cons_String">{</span>
      &lt;<a href="#TemplateElement_384_399" id="TemplateElement_457_472" title="Defined at line 20">TemplateElement</a>*&gt;
    <span class="cons_String">}</span>
  &gt;
  <a href="#Statement_556_565" id="Statement_487_496" title="Referenced at line 27">Statement</a>.<span class="cons_Constructor"><span id="ForeachStatementEntityDerive_497_525" title="Not referenced locally, nor via imports">ForeachStatementEntityDerive</span></span> = &lt;
    <span class="cons_String">foreach</span> &lt;<a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_543_545" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; <span class="cons_String">{</span>
      &lt;<a href="#Statement_487_496" id="Statement_556_565" title="Defined at line 25">Statement</a>*&gt;
    <span class="cons_String">}</span>
  &gt;

<span class="keyword">lexical sorts</span>

  <a href="#DeriveArgPropId_347_362" id="DeriveArgPropId_596_611" title="Referenced at line 18">DeriveArgPropId</a>

<span class="keyword">lexical syntax</span>

  <a href="#DeriveArgPropId_347_362" id="DeriveArgPropId_631_646" title="Referenced at line 18">DeriveArgPropId</a> = <a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_649_651" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>
  <a href="#DeriveArgPropId_347_362" id="DeriveArgPropId_654_669" title="Referenced at line 18">DeriveArgPropId</a> = <span class="cons_Lit">"filter"</span> {<span class="keyword">reject</span>}
  <a href="#DeriveArgPropId_347_362" id="DeriveArgPropId_692_707" title="Referenced at line 18">DeriveArgPropId</a> = <span class="cons_Lit">"filters"</span> {<span class="keyword">reject</span>}
  <a href="#DeriveArgPropId_347_362" id="DeriveArgPropId_731_746" title="Referenced at line 18">DeriveArgPropId</a> = <span class="cons_Lit">"facet"</span> {<span class="keyword">reject</span>}
  <a href="#DeriveArgPropId_347_362" id="DeriveArgPropId_768_783" title="Referenced at line 18">DeriveArgPropId</a> = <span class="cons_Lit">"facets"</span> {<span class="keyword">reject</span>}
  <a href="#DeriveArgPropId_347_362" id="DeriveArgPropId_806_821" title="Referenced at line 18">DeriveArgPropId</a> = <span class="cons_Lit">"tags"</span> {<span class="keyword">reject</span>}

  <span id="TemplateId_843_853" title="Not referenced locally, nor via imports">TemplateId</span> = <span class="cons_Lit">"foreach"</span> {<span class="keyword">reject</span>}

</code></pre></td></tr></tbody></table></div>