---
title: webdsl-statix.sdf3
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
<td class="code"><pre><code><span class="keyword">module</span> <span id="webdsl-statix_7_20" title="Not referenced locally, nor via imports">webdsl-statix</span>

<span class="keyword">imports</span>
  <a href="../WebDSL-AccessControl.sdf3#WebDSL-AccessControl_7_27" id="WebDSL-AccessControl_32_52" title="Defined at ../WebDSL-AccessControl.sdf3 line 1">WebDSL-AccessControl</a>
  <a href="../WebDSL-Action.sdf3#WebDSL-Action_7_20" id="WebDSL-Action_55_68" title="Defined at ../WebDSL-Action.sdf3 line 1">WebDSL-Action</a>
  <a href="../WebDSL-Ajax.sdf3#WebDSL-Ajax_7_18" id="WebDSL-Ajax_71_82" title="Defined at ../WebDSL-Ajax.sdf3 line 1">WebDSL-Ajax</a>
  <a href="../WebDSL-Attributes.sdf3#WebDSL-Attributes_7_24" id="WebDSL-Attributes_85_102" title="Defined at ../WebDSL-Attributes.sdf3 line 1">WebDSL-Attributes</a>
  <a href="../WebDSL-Core.sdf3#WebDSL-Core_7_18" id="WebDSL-Core_105_116" title="Defined at ../WebDSL-Core.sdf3 line 1">WebDSL-Core</a>
  <a href="../WebDSL-DataModel.sdf3#WebDSL-DataModel_7_23" id="WebDSL-DataModel_119_135" title="Defined at ../WebDSL-DataModel.sdf3 line 1">WebDSL-DataModel</a>
  <a href="../WebDSL-DataValidation.sdf3#WebDSL-DataValidation_7_28" id="WebDSL-DataValidation_138_159" title="Defined at ../WebDSL-DataValidation.sdf3 line 1">WebDSL-DataValidation</a>
  <a href="../WebDSL-Dispatch.sdf3#WebDSL-Dispatch_7_22" id="WebDSL-Dispatch_162_177" title="Defined at ../WebDSL-Dispatch.sdf3 line 1">WebDSL-Dispatch</a>
  <a href="../WebDSL-EntityDerive.sdf3#WebDSL-EntityDerive_7_26" id="WebDSL-EntityDerive_180_199" title="Defined at ../WebDSL-EntityDerive.sdf3 line 1">WebDSL-EntityDerive</a>
  <a href="../WebDSL-Exception.sdf3#WebDSL-Exception_7_23" id="WebDSL-Exception_202_218" title="Defined at ../WebDSL-Exception.sdf3 line 1">WebDSL-Exception</a>
  <a href="../WebDSL-Expand.sdf3#WebDSL-Expand_7_20" id="WebDSL-Expand_221_234" title="Defined at ../WebDSL-Expand.sdf3 line 1">WebDSL-Expand</a>
  <a href="../WebDSL-Generated.sdf3#WebDSL-Generated_7_23" id="WebDSL-Generated_237_253" title="Defined at ../WebDSL-Generated.sdf3 line 1">WebDSL-Generated</a>
  <a href="../WebDSL-JavaScript.sdf3#WebDSL-JavaScript_7_24" id="WebDSL-JavaScript_256_273" title="Defined at ../WebDSL-JavaScript.sdf3 line 1">WebDSL-JavaScript</a>
  <a href="../WebDSL-Lexical.sdf3#WebDSL-Lexical_7_21" id="WebDSL-Lexical_276_290" title="Defined at ../WebDSL-Lexical.sdf3 line 1">WebDSL-Lexical</a>
  <a href="../WebDSL-Native.sdf3#WebDSL-Native_7_20" id="WebDSL-Native_293_306" title="Defined at ../WebDSL-Native.sdf3 line 1">WebDSL-Native</a>
  <a href="../WebDSL-Prefetch.sdf3#WebDSL-Prefetch_7_22" id="WebDSL-Prefetch_309_324" title="Defined at ../WebDSL-Prefetch.sdf3 line 1">WebDSL-Prefetch</a>
  <a href="../WebDSL-Regex.sdf3#WebDSL-Regex_7_19" id="WebDSL-Regex_327_339" title="Defined at ../WebDSL-Regex.sdf3 line 1">WebDSL-Regex</a>
  <a href="../WebDSL-Routing.sdf3#WebDSL-Routing_7_21" id="WebDSL-Routing_342_356" title="Defined at ../WebDSL-Routing.sdf3 line 1">WebDSL-Routing</a>
  <a href="../WebDSL-Search.sdf3#WebDSL-Search_7_20" id="WebDSL-Search_359_372" title="Defined at ../WebDSL-Search.sdf3 line 1">WebDSL-Search</a>
  <a href="../WebDSL-Service.sdf3#WebDSL-Service_7_21" id="WebDSL-Service_375_389" title="Defined at ../WebDSL-Service.sdf3 line 1">WebDSL-Service</a>
  <a href="../WebDSL-Test.sdf3#WebDSL-Test_7_18" id="WebDSL-Test_392_403" title="Defined at ../WebDSL-Test.sdf3 line 1">WebDSL-Test</a>
  <a href="../WebDSL-TimeInterval.sdf3#WebDSL-TimeInterval_7_26" id="WebDSL-TimeInterval_406_425" title="Defined at ../WebDSL-TimeInterval.sdf3 line 1">WebDSL-TimeInterval</a>
  <a href="../WebDSL-Type.sdf3#WebDSL-Type_7_18" id="WebDSL-Type_428_439" title="Defined at ../WebDSL-Type.sdf3 line 1">WebDSL-Type</a>
  <a href="../WebDSL-UI.sdf3#WebDSL-UI_7_16" id="WebDSL-UI_442_451" title="Defined at ../WebDSL-UI.sdf3 line 1">WebDSL-UI</a>
  <a href="../WebDSL-XML.sdf3#WebDSL-XML_7_17" id="WebDSL-XML_454_464" title="Defined at ../WebDSL-XML.sdf3 line 1">WebDSL-XML</a>

<span class="keyword">context-free start-symbols</span>

  <a href="../WebDSL-Core.sdf3#Unit_1227_1231" id="Unit_496_500" title="Defined at ../WebDSL-Core.sdf3 line 45, 53, 59, 64, 70, 75, 81, 86, 92, 97">Unit</a>

</code></pre></td></tr></tbody></table></div>