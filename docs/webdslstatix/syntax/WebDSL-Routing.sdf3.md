---
title: WebDSL-Routing.sdf3
hide:
  - toc
---

# `WebDSL-Routing.sdf3`

:simple-github: [pdmosses/webdsl-statix/webdslstatix/syntax/WebDSL-Routing.sdf3]

[pdmosses/webdsl-statix/webdslstatix/syntax/WebDSL-Routing.sdf3]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/syntax/WebDSL-Routing.sdf3 "The source file on GitHub"

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
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl-statix.sdf3/#WebDSL-Routing_342_356" id="WebDSL-Routing_7_21" title="Referenced at ../webdsl-statix.sdf3 line 21">WebDSL-Routing</a>

<span class="keyword">imports</span>
  <a href="../WebDSL-Core.sdf3/#WebDSL-Core_7_18" id="WebDSL-Core_33_44" title="Defined at ../WebDSL-Core.sdf3 line 1">WebDSL-Core</a>
  <a href="../WebDSL-Action.sdf3/#WebDSL-Action_7_20" id="WebDSL-Action_47_60" title="Defined at ../WebDSL-Action.sdf3 line 1">WebDSL-Action</a>

<span class="keyword">context-free sorts</span>

  <a href="#RoutingElement_167_181" id="RoutingElement_84_98" title="Referenced at line 15">RoutingElement</a>

<span class="keyword">context-free syntax</span>

  <span id="Definition_123_133" title="Not referenced locally, nor via imports">Definition</span>.<span class="cons_Constructor"><span id="Routing_134_141" title="Not referenced locally, nor via imports">Routing</span></span> = &lt;
    <span class="cons_String">routing</span> <span class="cons_String">{</span>
      &lt;<a href="#RoutingElement_84_98" id="RoutingElement_167_181" title="Defined at line 9, 18, 21">RoutingElement</a>*&gt;
    <span class="cons_String">}</span>
  &gt;
  <a href="#RoutingElement_167_181" id="RoutingElement_196_210" title="Referenced at line 15">RoutingElement</a>.<span class="cons_Constructor"><span id="RoutingReceive_211_225" title="Not referenced locally, nor via imports">RoutingReceive</span></span> = &lt;
    <span class="cons_String">receive</span> &lt;<a href="../WebDSL-Core.sdf3/#OptFormalArgs_113_126" id="OptFormalArgs_243_256" title="Defined at ../WebDSL-Core.sdf3 line 10, 37, 38">OptFormalArgs</a>&gt; &lt;<a href="../WebDSL-Action.sdf3/#Block_145_150" id="Block_259_264" title="Defined at ../WebDSL-Action.sdf3 line 13, 45">Block</a>&gt;
  &gt;
  <a href="#RoutingElement_167_181" id="RoutingElement_272_286" title="Referenced at line 15">RoutingElement</a>.<span class="cons_Constructor"><span id="RoutingConstruct_287_303" title="Not referenced locally, nor via imports">RoutingConstruct</span></span> = &lt;
    <span class="cons_String">construct</span> &lt;<a href="../WebDSL-Core.sdf3/#OptFormalArgs_113_126" id="OptFormalArgs_323_336" title="Defined at ../WebDSL-Core.sdf3 line 10, 37, 38">OptFormalArgs</a>&gt; &lt;<a href="../WebDSL-Action.sdf3/#Block_145_150" id="Block_339_344" title="Defined at ../WebDSL-Action.sdf3 line 13, 45">Block</a>&gt;
  &gt;

</code></pre></td></tr></tbody></table></div>