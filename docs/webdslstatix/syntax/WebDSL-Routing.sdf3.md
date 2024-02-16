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
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl-statix.sdf3/#WebDSL-Routing_21_3" id="WebDSL-Routing_1_8" title="a definition with a single reference">WebDSL-Routing</a>

<span class="keyword">imports</span>
  <a href="../WebDSL-Core.sdf3/#WebDSL-Core_1_8" id="WebDSL-Core_4_3" title="a reference to a single-file definition">WebDSL-Core</a>
  <a href="../WebDSL-Action.sdf3/#WebDSL-Action_1_8" id="WebDSL-Action_5_3" title="a reference to a single-file definition">WebDSL-Action</a>

<span class="keyword">context-free sorts</span>

  <a href="#RoutingElement_15_8" id="RoutingElement_9_3" title="a definition with a single reference">RoutingElement</a>

<span class="keyword">context-free syntax</span>

  <span id="Definition_13_3" title="a definition with no references">Definition</span>.<span class="cons_Constructor"><span id="Routing_13_14" title="a definition with no references">Routing</span></span> = &lt;
    <span class="cons_String">routing</span> <span class="cons_String">{</span>
      &lt;<a href="#RoutingElement_9_3" id="RoutingElement_15_8" title="a reference to a single-file definition">RoutingElement</a>*&gt;
    <span class="cons_String">}</span>
  &gt;
  <a href="#RoutingElement_15_8" id="RoutingElement_18_3" title="a definition with a single reference">RoutingElement</a>.<span class="cons_Constructor"><span id="RoutingReceive_18_18" title="a definition with no references">RoutingReceive</span></span> = &lt;
    <span class="cons_String">receive</span> &lt;<a href="../WebDSL-Core.sdf3/#OptFormalArgs_10_13" id="OptFormalArgs_19_14" title="a reference to a single-file definition">OptFormalArgs</a>&gt; &lt;<a href="../WebDSL-Action.sdf3/#Block_13_11" id="Block_19_30" title="a reference to a single-file definition">Block</a>&gt;
  &gt;
  <a href="#RoutingElement_15_8" id="RoutingElement_21_3" title="a definition with a single reference">RoutingElement</a>.<span class="cons_Constructor"><span id="RoutingConstruct_21_18" title="a definition with no references">RoutingConstruct</span></span> = &lt;
    <span class="cons_String">construct</span> &lt;<a href="../WebDSL-Core.sdf3/#OptFormalArgs_10_13" id="OptFormalArgs_22_16" title="a reference to a single-file definition">OptFormalArgs</a>&gt; &lt;<a href="../WebDSL-Action.sdf3/#Block_13_11" id="Block_22_32" title="a reference to a single-file definition">Block</a>&gt;
  &gt;

</code></pre></td></tr></tbody></table></div>

<div id="modal">
  <div id="modal-content">
    <span id="modal-close">&times;</span>
    <h2 id="modal-h2"></h2>
    <p  id="modal-p"></p>
    <ul id="modal-ul"></ul>
  </div>
</div>
