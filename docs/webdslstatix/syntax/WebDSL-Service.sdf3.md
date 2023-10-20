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
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl-statix.sdf3/#WebDSL-Service_375_389" id="WebDSL-Service_7_21" title="Referenced at ../webdsl-statix.sdf3 line 23">WebDSL-Service</a>

<span class="keyword">imports</span>
  <a href="../WebDSL-Action.sdf3/#WebDSL-Action_7_20" id="WebDSL-Action_33_46" title="Defined at ../WebDSL-Action.sdf3 line 1">WebDSL-Action</a>
  <a href="../WebDSL-Core.sdf3/#WebDSL-Core_7_18" id="WebDSL-Core_49_60" title="Defined at ../WebDSL-Core.sdf3 line 1">WebDSL-Core</a>
  <a href="../WebDSL-Lexical.sdf3/#WebDSL-Lexical_7_21" id="WebDSL-Lexical_63_77" title="Defined at ../WebDSL-Lexical.sdf3 line 1">WebDSL-Lexical</a>
  <a href="../WebDSL-UI.sdf3/#WebDSL-UI_7_16" id="WebDSL-UI_80_89" title="Defined at ../WebDSL-UI.sdf3 line 1">WebDSL-UI</a>
  <a href="../WebDSL-DataModel.sdf3/#WebDSL-DataModel_7_23" id="WebDSL-DataModel_92_108" title="Defined at ../WebDSL-DataModel.sdf3 line 1">WebDSL-DataModel</a>

<span class="keyword">context-free sorts</span>

  <a href="#SyncConfigEmbedded_403_421" id="SyncConfigEmbedded_132_150" title="Referenced at line 22">SyncConfigEmbedded</a> <a href="#SyncOption_503_513" id="SyncOption_151_161" title="Referenced at line 24">SyncOption</a>

<span class="keyword">context-free syntax</span>

  <span id="Definition_186_196" title="Not referenced locally, nor via imports">Definition</span>.<span class="cons_Constructor"><span id="ServiceFunction_197_212" title="Not referenced locally, nor via imports">ServiceFunction</span></span> = &lt;
    <span class="cons_String">service</span> &lt;<a href="../WebDSL-UI.sdf3/#Modifier_197_205" id="Modifier_230_238" title="Defined at ../WebDSL-UI.sdf3 line 16, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71">Modifier</a>*&gt; &lt;<a href="../WebDSL-Lexical.sdf3/#Id_86_88" id="Id_242_244" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; <span class="cons_String">(</span> &lt;{<a href="../WebDSL-Core.sdf3/#FormalArg_103_112" id="FormalArg_250_259" title="Defined at ../WebDSL-Core.sdf3 line 10, 36">FormalArg</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span> &lt;<a href="../WebDSL-Action.sdf3/#Block_145_150" id="Block_270_275" title="Defined at ../WebDSL-Action.sdf3 line 13, 45">Block</a>&gt;
  &gt;
  <span id="Definition_283_293" title="Not referenced locally, nor via imports">Definition</span>.<span class="cons_Constructor"><span id="DeriveWebServices_294_311" title="Not referenced locally, nor via imports">DeriveWebServices</span></span> = &lt;
    <span class="cons_String">derive</span> <span class="cons_String">webservices</span> <span class="cons_String">for</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_86_88" id="Id_344_346" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; <span class="cons_String">,</span> <span class="cons_String">with</span> <span class="cons_String">nameproperty</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_86_88" id="Id_369_371" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt;
  &gt;
  <span id="EntityBodyDeclaration_379_400" title="Not referenced locally, nor via imports">EntityBodyDeclaration</span> = <a href="#SyncConfigEmbedded_132_150" id="SyncConfigEmbedded_403_421" title="Defined at line 12, 23">SyncConfigEmbedded</a>
  <a href="#SyncConfigEmbedded_403_421" id="SyncConfigEmbedded_424_442" title="Referenced at line 22">SyncConfigEmbedded</a>.<span class="cons_Constructor"><span id="SyncConfigEmbedded_443_461" title="Not referenced locally, nor via imports">SyncConfigEmbedded</span></span> = &lt;
    <span class="cons_String">synchronization</span> <span class="cons_String">configuration</span> <span class="cons_String">{</span> &lt;<a href="#SyncOption_151_161" id="SyncOption_503_513" title="Defined at line 12, 26, 27, 28, 29, 30">SyncOption</a>*&gt; <span class="cons_String">}</span>
  &gt;
  <a href="#SyncOption_503_513" id="SyncOption_524_534" title="Referenced at line 24">SyncOption</a>.<span class="cons_Constructor"><span id="SyncTopLevelNameProperty_535_559" title="Not referenced locally, nor via imports">SyncTopLevelNameProperty</span></span> = &lt;<span class="cons_String">toplevel</span> <span class="cons_String">name</span> <span class="cons_String">property</span> <span class="cons_String">:</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_86_88" id="Id_589_591" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt;&gt;
  <a href="#SyncOption_503_513" id="SyncOption_596_606" title="Referenced at line 24">SyncOption</a>.<span class="cons_Constructor"><span id="SyncRestrictedProperties_607_631" title="Not referenced locally, nor via imports">SyncRestrictedProperties</span></span> = &lt;<span class="cons_String">restricted</span> <span class="cons_String">properties</span> <span class="cons_String">:</span> &lt;{<a href="../WebDSL-Lexical.sdf3/#Id_86_88" id="Id_661_663" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a> <span class="cons_Lit">","</span>}*&gt;&gt;
  <a href="#SyncOption_503_513" id="SyncOption_674_684" title="Referenced at line 24">SyncOption</a>.<span class="cons_Constructor"><span id="SyncACRead_685_695" title="Not referenced locally, nor via imports">SyncACRead</span></span> = &lt;<span class="cons_String">access</span> <span class="cons_String">read</span> <span class="cons_String">:</span> &lt;<a href="../WebDSL-UI.sdf3/#Exp_13248_13251" id="Exp_714_717" title="Defined at ../WebDSL-UI.sdf3 line 469, 517">Exp</a>&gt;&gt;
  <a href="#SyncOption_503_513" id="SyncOption_722_732" title="Referenced at line 24">SyncOption</a>.<span class="cons_Constructor"><span id="SyncACWrite_733_744" title="Not referenced locally, nor via imports">SyncACWrite</span></span> = &lt;<span class="cons_String">access</span> <span class="cons_String">write</span> <span class="cons_String">:</span> &lt;<a href="../WebDSL-UI.sdf3/#Exp_13248_13251" id="Exp_764_767" title="Defined at ../WebDSL-UI.sdf3 line 469, 517">Exp</a>&gt;&gt;
  <a href="#SyncOption_503_513" id="SyncOption_772_782" title="Referenced at line 24">SyncOption</a>.<span class="cons_Constructor"><span id="SyncACCreate_783_795" title="Not referenced locally, nor via imports">SyncACCreate</span></span> = &lt;<span class="cons_String">access</span> <span class="cons_String">create</span> <span class="cons_String">:</span> &lt;<a href="../WebDSL-UI.sdf3/#Exp_13248_13251" id="Exp_816_819" title="Defined at ../WebDSL-UI.sdf3 line 469, 517">Exp</a>&gt;&gt;

</code></pre></td></tr></tbody></table></div>