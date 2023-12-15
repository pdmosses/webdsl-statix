---
title: webdsl-statix.sdf3
hide:
  - toc
---

# `webdsl-statix.sdf3`

:simple-github: [pdmosses/webdsl-statix/webdslstatix/syntax/webdsl-statix.sdf3]

[pdmosses/webdsl-statix/webdslstatix/syntax/webdsl-statix.sdf3]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/syntax/webdsl-statix.sdf3 "The source file on GitHub"

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
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <span id="webdsl-statix_1_8" title="Not referenced">webdsl-statix</span>

<span class="keyword">imports</span>
  <a href="../WebDSL-AccessControl.sdf3/#WebDSL-AccessControl_1_8" id="WebDSL-AccessControl_4_3" title="Defined at ../WebDSL-AccessControl.sdf3 line 1">WebDSL-AccessControl</a>
  <a href="../WebDSL-Action.sdf3/#WebDSL-Action_1_8" id="WebDSL-Action_5_3" title="Defined at ../WebDSL-Action.sdf3 line 1">WebDSL-Action</a>
  <a href="../WebDSL-Ajax.sdf3/#WebDSL-Ajax_1_8" id="WebDSL-Ajax_6_3" title="Defined at ../WebDSL-Ajax.sdf3 line 1">WebDSL-Ajax</a>
  <a href="../WebDSL-Attributes.sdf3/#WebDSL-Attributes_1_8" id="WebDSL-Attributes_7_3" title="Defined at ../WebDSL-Attributes.sdf3 line 1">WebDSL-Attributes</a>
  <a href="../WebDSL-Core.sdf3/#WebDSL-Core_1_8" id="WebDSL-Core_8_3" title="Defined at ../WebDSL-Core.sdf3 line 1">WebDSL-Core</a>
  <a href="../WebDSL-DataModel.sdf3/#WebDSL-DataModel_1_8" id="WebDSL-DataModel_9_3" title="Defined at ../WebDSL-DataModel.sdf3 line 1">WebDSL-DataModel</a>
  <a href="../WebDSL-DataValidation.sdf3/#WebDSL-DataValidation_1_8" id="WebDSL-DataValidation_10_3" title="Defined at ../WebDSL-DataValidation.sdf3 line 1">WebDSL-DataValidation</a>
  <a href="../WebDSL-Dispatch.sdf3/#WebDSL-Dispatch_1_8" id="WebDSL-Dispatch_11_3" title="Defined at ../WebDSL-Dispatch.sdf3 line 1">WebDSL-Dispatch</a>
  <a href="../WebDSL-EntityDerive.sdf3/#WebDSL-EntityDerive_1_8" id="WebDSL-EntityDerive_12_3" title="Defined at ../WebDSL-EntityDerive.sdf3 line 1">WebDSL-EntityDerive</a>
  <a href="../WebDSL-Exception.sdf3/#WebDSL-Exception_1_8" id="WebDSL-Exception_13_3" title="Defined at ../WebDSL-Exception.sdf3 line 1">WebDSL-Exception</a>
  <a href="../WebDSL-Expand.sdf3/#WebDSL-Expand_1_8" id="WebDSL-Expand_14_3" title="Defined at ../WebDSL-Expand.sdf3 line 1">WebDSL-Expand</a>
  <a href="../WebDSL-Generated.sdf3/#WebDSL-Generated_1_8" id="WebDSL-Generated_15_3" title="Defined at ../WebDSL-Generated.sdf3 line 1">WebDSL-Generated</a>
  <a href="../WebDSL-JavaScript.sdf3/#WebDSL-JavaScript_1_8" id="WebDSL-JavaScript_16_3" title="Defined at ../WebDSL-JavaScript.sdf3 line 1">WebDSL-JavaScript</a>
  <a href="../WebDSL-Lexical.sdf3/#WebDSL-Lexical_1_8" id="WebDSL-Lexical_17_3" title="Defined at ../WebDSL-Lexical.sdf3 line 1">WebDSL-Lexical</a>
  <a href="../WebDSL-Native.sdf3/#WebDSL-Native_1_8" id="WebDSL-Native_18_3" title="Defined at ../WebDSL-Native.sdf3 line 1">WebDSL-Native</a>
  <a href="../WebDSL-Prefetch.sdf3/#WebDSL-Prefetch_1_8" id="WebDSL-Prefetch_19_3" title="Defined at ../WebDSL-Prefetch.sdf3 line 1">WebDSL-Prefetch</a>
  <a href="../WebDSL-Regex.sdf3/#WebDSL-Regex_1_8" id="WebDSL-Regex_20_3" title="Defined at ../WebDSL-Regex.sdf3 line 1">WebDSL-Regex</a>
  <a href="../WebDSL-Routing.sdf3/#WebDSL-Routing_1_8" id="WebDSL-Routing_21_3" title="Defined at ../WebDSL-Routing.sdf3 line 1">WebDSL-Routing</a>
  <a href="../WebDSL-Search.sdf3/#WebDSL-Search_1_8" id="WebDSL-Search_22_3" title="Defined at ../WebDSL-Search.sdf3 line 1">WebDSL-Search</a>
  <a href="../WebDSL-Service.sdf3/#WebDSL-Service_1_8" id="WebDSL-Service_23_3" title="Defined at ../WebDSL-Service.sdf3 line 1">WebDSL-Service</a>
  <a href="../WebDSL-Test.sdf3/#WebDSL-Test_1_8" id="WebDSL-Test_24_3" title="Defined at ../WebDSL-Test.sdf3 line 1">WebDSL-Test</a>
  <a href="../WebDSL-TimeInterval.sdf3/#WebDSL-TimeInterval_1_8" id="WebDSL-TimeInterval_25_3" title="Defined at ../WebDSL-TimeInterval.sdf3 line 1">WebDSL-TimeInterval</a>
  <a href="../WebDSL-Type.sdf3/#WebDSL-Type_1_8" id="WebDSL-Type_26_3" title="Defined at ../WebDSL-Type.sdf3 line 1">WebDSL-Type</a>
  <a href="../WebDSL-UI.sdf3/#WebDSL-UI_1_8" id="WebDSL-UI_27_3" title="Defined at ../WebDSL-UI.sdf3 line 1">WebDSL-UI</a>
  <a href="../WebDSL-XML.sdf3/#WebDSL-XML_1_8" id="WebDSL-XML_28_3" title="Defined at ../WebDSL-XML.sdf3 line 1">WebDSL-XML</a>

<span class="keyword">context-free start-symbols</span>

  <a href="../WebDSL-Core.sdf3/#Unit_45_3" id="Unit_32_3" title="Defined at ../WebDSL-Core.sdf3 line 45, 53, 59, 64, 70, 75, 81, 86, 92, 97">Unit</a>

</code></pre></td></tr></tbody></table></div>

<div id="modal">
  <div id="modal-content">
    <span id="modal-close">&times;</span>
    <h2 id="modal-h2"></h2>
    <p  id="modal-p"></p>
    <ul id="modal-ul"></ul>
  </div>
</div>
