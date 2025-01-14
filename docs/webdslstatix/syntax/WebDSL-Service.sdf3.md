---
title: WebDSL-Service.sdf3
hide:
  - toc
---

# `WebDSL-Service.sdf3`

:simple-github: [pdmosses/webdsl-statix/webdslstatix/syntax/WebDSL-Service.sdf3]

[pdmosses/webdsl-statix/webdslstatix/syntax/WebDSL-Service.sdf3]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/syntax/WebDSL-Service.sdf3 "The source file on GitHub"

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
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl-statix.sdf3/#WebDSL-Service_23_3" id="WebDSL-Service_1_8" title="a definition with a single reference">WebDSL-Service</a>

<span class="keyword">imports</span>
  <a href="../WebDSL-Action.sdf3/#WebDSL-Action_1_8" id="WebDSL-Action_4_3" title="a reference to a single-file definition">WebDSL-Action</a>
  <a href="../WebDSL-Core.sdf3/#WebDSL-Core_1_8" id="WebDSL-Core_5_3" title="a reference to a single-file definition">WebDSL-Core</a>
  <a href="../WebDSL-Lexical.sdf3/#WebDSL-Lexical_1_8" id="WebDSL-Lexical_6_3" title="a reference to a single-file definition">WebDSL-Lexical</a>
  <a href="../WebDSL-UI.sdf3/#WebDSL-UI_1_8" id="WebDSL-UI_7_3" title="a reference to a single-file definition">WebDSL-UI</a>
  <a href="../WebDSL-DataModel.sdf3/#WebDSL-DataModel_1_8" id="WebDSL-DataModel_8_3" title="a reference to a single-file definition">WebDSL-DataModel</a>

<span class="keyword">context-free sorts</span>

  <a href="#SyncConfigEmbedded_22_27" id="SyncConfigEmbedded_12_3" title="a definition with a single reference">SyncConfigEmbedded</a> <a href="#SyncOption_24_38" id="SyncOption_12_22" title="a definition with a single reference">SyncOption</a>

<span class="keyword">context-free syntax</span>

  <span id="Definition_16_3" title="a definition with no references">Definition</span>.<span class="cons_Constructor"><span id="ServiceFunction_16_14" title="a definition with no references">ServiceFunction</span></span> = &lt;
    <span class="cons_String">service</span> &lt;<a href="../WebDSL-UI.sdf3/#Modifier_16_22" id="Modifier_17_14" title="a reference to a single-file definition">Modifier</a>*&gt; &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_17_26" title="a reference to a single-file definition">Id</a>&gt; <span class="cons_String">(</span> &lt;{<a href="../WebDSL-Core.sdf3/#FormalArg_10_3" id="FormalArg_17_34" title="a reference to a single-file definition">FormalArg</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span> &lt;<a href="../WebDSL-Action.sdf3/#Block_13_11" id="Block_17_54" title="a reference to a single-file definition">Block</a>&gt;
  &gt;
  <span id="Definition_19_3" title="a definition with no references">Definition</span>.<span class="cons_Constructor"><span id="DeriveWebServices_19_14" title="a definition with no references">DeriveWebServices</span></span> = &lt;
    <span class="cons_String">derive</span> <span class="cons_String">webservices</span> <span class="cons_String">for</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_20_29" title="a reference to a single-file definition">Id</a>&gt; <span class="cons_String">,</span> <span class="cons_String">with</span> <span class="cons_String">nameproperty</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_20_54" title="a reference to a single-file definition">Id</a>&gt;
  &gt;
  <span id="EntityBodyDeclaration_22_3" title="a definition with no references">EntityBodyDeclaration</span> = <a href="#SyncConfigEmbedded_12_3" id="SyncConfigEmbedded_22_27" title="a reference to a single-file definition">SyncConfigEmbedded</a>
  <a href="#SyncConfigEmbedded_22_27" id="SyncConfigEmbedded_23_3" title="a definition with a single reference">SyncConfigEmbedded</a>.<span class="cons_Constructor"><span id="SyncConfigEmbedded_23_22" title="a definition with no references">SyncConfigEmbedded</span></span> = &lt;
    <span class="cons_String">synchronization</span> <span class="cons_String">configuration</span> <span class="cons_String">{</span> &lt;<a href="#SyncOption_12_22" id="SyncOption_24_38" title="a reference to a single-file definition">SyncOption</a>*&gt; <span class="cons_String">}</span>
  &gt;
  <a href="#SyncOption_24_38" id="SyncOption_26_3" title="a definition with a single reference">SyncOption</a>.<span class="cons_Constructor"><span id="SyncTopLevelNameProperty_26_14" title="a definition with no references">SyncTopLevelNameProperty</span></span> = &lt;<span class="cons_String">toplevel</span> <span class="cons_String">name</span> <span class="cons_String">property</span> <span class="cons_String">:</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_26_68" title="a reference to a single-file definition">Id</a>&gt;&gt;
  <a href="#SyncOption_24_38" id="SyncOption_27_3" title="a definition with a single reference">SyncOption</a>.<span class="cons_Constructor"><span id="SyncRestrictedProperties_27_14" title="a definition with no references">SyncRestrictedProperties</span></span> = &lt;<span class="cons_String">restricted</span> <span class="cons_String">properties</span> <span class="cons_String">:</span> &lt;{<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_27_68" title="a reference to a single-file definition">Id</a> <span class="cons_Lit">","</span>}*&gt;&gt;
  <a href="#SyncOption_24_38" id="SyncOption_28_3" title="a definition with a single reference">SyncOption</a>.<span class="cons_Constructor"><span id="SyncACRead_28_14" title="a definition with no references">SyncACRead</span></span> = &lt;<span class="cons_String">access</span> <span class="cons_String">read</span> <span class="cons_String">:</span> &lt;<a href="../WebDSL-UI.sdf3/#Exp_469_3" id="Exp_28_43" title="a reference to a single-file definition">Exp</a>&gt;&gt;
  <a href="#SyncOption_24_38" id="SyncOption_29_3" title="a definition with a single reference">SyncOption</a>.<span class="cons_Constructor"><span id="SyncACWrite_29_14" title="a definition with no references">SyncACWrite</span></span> = &lt;<span class="cons_String">access</span> <span class="cons_String">write</span> <span class="cons_String">:</span> &lt;<a href="../WebDSL-UI.sdf3/#Exp_469_3" id="Exp_29_45" title="a reference to a single-file definition">Exp</a>&gt;&gt;
  <a href="#SyncOption_24_38" id="SyncOption_30_3" title="a definition with a single reference">SyncOption</a>.<span class="cons_Constructor"><span id="SyncACCreate_30_14" title="a definition with no references">SyncACCreate</span></span> = &lt;<span class="cons_String">access</span> <span class="cons_String">create</span> <span class="cons_String">:</span> &lt;<a href="../WebDSL-UI.sdf3/#Exp_469_3" id="Exp_30_47" title="a reference to a single-file definition">Exp</a>&gt;&gt;

</code></pre></td></tr></tbody></table></div>

<div id="modal">
  <div id="modal-content">
    <span id="modal-close">&times;</span>
    <h2 id="modal-h2"></h2>
    <p  id="modal-p"></p>
    <ul id="modal-ul"></ul>
  </div>
</div>
