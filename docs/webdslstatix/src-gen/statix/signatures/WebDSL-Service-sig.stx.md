---
title: WebDSL-Service-sig.stx
hide:
  - toc
---

# `WebDSL-Service-sig.stx`



[pdmosses/webdsl-statix/webdslstatix/src-gen/statix/signatures/WebDSL-Service-sig.stx]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/src-gen/statix/signatures/WebDSL-Service-sig.stx "The source file on GitHub"

<div class="stx"><table class="highlighttable"><tbody><tr><td class="linenos"><div class="linenodiv"><pre><span></span>1
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
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl-statix-sig.stx/#signatures/WebDSL-Service-sig_23_3" id="signatures/WebDSL-Service-sig_1_8" title="a definition with a single reference"><span class="token sort_Id">signatures/WebDSL-Service-sig</span></a>

<span class="keyword">imports</span>
  <a href="../WebDSL-Action-sig.stx/#signatures/WebDSL-Action-sig_1_8" id="signatures/WebDSL-Action-sig_4_3" title="a reference to a single-file definition"><span class="token sort_Id">signatures/WebDSL-Action-sig</span></a>
  <a href="../WebDSL-Core-sig.stx/#signatures/WebDSL-Core-sig_1_8" id="signatures/WebDSL-Core-sig_5_3" title="a reference to a single-file definition"><span class="token sort_Id">signatures/WebDSL-Core-sig</span></a>
  <a href="../WebDSL-Lexical-sig.stx/#signatures/WebDSL-Lexical-sig_1_8" id="signatures/WebDSL-Lexical-sig_6_3" title="a reference to a single-file definition"><span class="token sort_Id">signatures/WebDSL-Lexical-sig</span></a>
  <a href="../WebDSL-UI-sig.stx/#signatures/WebDSL-UI-sig_1_8" id="signatures/WebDSL-UI-sig_7_3" title="a reference to a single-file definition"><span class="token sort_Id">signatures/WebDSL-UI-sig</span></a>
  <a href="../WebDSL-DataModel-sig.stx/#signatures/WebDSL-DataModel-sig_1_8" id="signatures/WebDSL-DataModel-sig_8_3" title="a reference to a single-file definition"><span class="token sort_Id">signatures/WebDSL-DataModel-sig</span></a>

<span class="keyword">signature</span>

  <span class="keyword">sorts</span>
    <span class="cons_SortDecl"><button class="modal-open" id="SyncConfigEmbedded_13_5" title="a definition with multiple references" data-urls="#SyncConfigEmbedded line 17_32, 25_48, 26_46"><span class="token sort_Id">SyncConfigEmbedded</span></button></span>
    <span class="cons_SortDecl"><button class="modal-open" id="SyncOption_14_5" title="a definition with multiple references" data-urls="#SyncOption line 18_24, 26_31, 27_38, 28_44, 29_25, 30_26, 31_27"><span class="token sort_Id">SyncOption</span></button></span>

  <span class="keyword">constructors</span>
    <span class="cons_OpDecl"><span id="SyncConfigEmbedded-Plhdr_17_5" title="a definition with no references"><span class="token sort_Id">SyncConfigEmbedded-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#SyncConfigEmbedded_13_5" id="SyncConfigEmbedded_17_32" title="a reference to a single-file definition"><span class="token sort_Id">SyncConfigEmbedded</span></a></span></span>
    <span class="cons_OpDecl"><span id="SyncOption-Plhdr_18_5" title="a definition with no references"><span class="token sort_Id">SyncOption-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#SyncOption_14_5" id="SyncOption_18_24" title="a reference to a single-file definition"><span class="token sort_Id">SyncOption</span></a></span></span>

<span class="keyword">signature</span>

  <span class="keyword">constructors</span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/webdsl-services.stx/#ServiceFunction_14_12" id="ServiceFunction_23_5" title="a definition with a single reference"><span class="token sort_Id">ServiceFunction</span></a> <span class="operator">:</span> <span class="keyword">list</span><span class="operator">(</span><span class="cons_SimpleSort"><a href="../WebDSL-UI-sig.stx/#Modifier_14_5" id="Modifier_23_28" title="a reference to a single-file definition"><span class="token sort_Id">Modifier</span></a></span><span class="operator">)</span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="../WebDSL-Lexical-sig.stx/#Id_14_5" id="Id_23_40" title="a reference to a single-file definition"><span class="token sort_Id">Id</span></a></span> <span class="operator">*</span> <span class="keyword">list</span><span class="operator">(</span><span class="cons_SimpleSort"><a href="../WebDSL-Core-sig.stx/#FormalArg_11_5" id="FormalArg_23_50" title="a reference to a single-file definition"><span class="token sort_Id">FormalArg</span></a></span><span class="operator">)</span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="../WebDSL-Action-sig.stx/#Block_15_5" id="Block_23_63" title="a reference to a single-file definition"><span class="token sort_Id">Block</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="../WebDSL-Core-sig.stx/#Definition_20_5" id="Definition_23_72" title="a reference to a single-file definition"><span class="token sort_Id">Definition</span></a></span></span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/webdsl-services.stx/#DeriveWebServices_12_12" id="DeriveWebServices_24_5" title="a definition with a single reference"><span class="token sort_Id">DeriveWebServices</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="../WebDSL-Lexical-sig.stx/#Id_14_5" id="Id_24_25" title="a reference to a single-file definition"><span class="token sort_Id">Id</span></a></span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="../WebDSL-Lexical-sig.stx/#Id_14_5" id="Id_24_30" title="a reference to a single-file definition"><span class="token sort_Id">Id</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="../WebDSL-Core-sig.stx/#Definition_20_5" id="Definition_24_36" title="a reference to a single-file definition"><span class="token sort_Id">Definition</span></a></span></span>
    <span class="cons_OpDecl"><span id="SyncConfigEmbedded2EntityBodyDeclaration_25_5" title="a definition with no references"><span class="token sort_Id">SyncConfigEmbedded2EntityBodyDeclaration</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#SyncConfigEmbedded_13_5" id="SyncConfigEmbedded_25_48" title="a reference to a single-file definition"><span class="token sort_Id">SyncConfigEmbedded</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="../WebDSL-DataModel-sig.stx/#EntityBodyDeclaration_11_5" id="EntityBodyDeclaration_25_70" title="a reference to a single-file definition"><span class="token sort_Id">EntityBodyDeclaration</span></a></span></span>
    <span class="cons_OpDecl"><span id="SyncConfigEmbedded_26_5" title="a definition with no references"><span class="token sort_Id">SyncConfigEmbedded</span></span> <span class="operator">:</span> <span class="keyword">list</span><span class="operator">(</span><span class="cons_SimpleSort"><a href="#SyncOption_14_5" id="SyncOption_26_31" title="a reference to a single-file definition"><span class="token sort_Id">SyncOption</span></a></span><span class="operator">)</span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#SyncConfigEmbedded_13_5" id="SyncConfigEmbedded_26_46" title="a reference to a single-file definition"><span class="token sort_Id">SyncConfigEmbedded</span></a></span></span>
    <span class="cons_OpDecl"><span id="SyncTopLevelNameProperty_27_5" title="a definition with no references"><span class="token sort_Id">SyncTopLevelNameProperty</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="../WebDSL-Lexical-sig.stx/#Id_14_5" id="Id_27_32" title="a reference to a single-file definition"><span class="token sort_Id">Id</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#SyncOption_14_5" id="SyncOption_27_38" title="a reference to a single-file definition"><span class="token sort_Id">SyncOption</span></a></span></span>
    <span class="cons_OpDecl"><span id="SyncRestrictedProperties_28_5" title="a definition with no references"><span class="token sort_Id">SyncRestrictedProperties</span></span> <span class="operator">:</span> <span class="keyword">list</span><span class="operator">(</span><span class="cons_SimpleSort"><a href="../WebDSL-Lexical-sig.stx/#Id_14_5" id="Id_28_37" title="a reference to a single-file definition"><span class="token sort_Id">Id</span></a></span><span class="operator">)</span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#SyncOption_14_5" id="SyncOption_28_44" title="a reference to a single-file definition"><span class="token sort_Id">SyncOption</span></a></span></span>
    <span class="cons_OpDecl"><span id="SyncACRead_29_5" title="a definition with no references"><span class="token sort_Id">SyncACRead</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="../WebDSL-Action-sig.stx/#Exp_25_5" id="Exp_29_18" title="a reference to a single-file definition"><span class="token sort_Id">Exp</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#SyncOption_14_5" id="SyncOption_29_25" title="a reference to a single-file definition"><span class="token sort_Id">SyncOption</span></a></span></span>
    <span class="cons_OpDecl"><span id="SyncACWrite_30_5" title="a definition with no references"><span class="token sort_Id">SyncACWrite</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="../WebDSL-Action-sig.stx/#Exp_25_5" id="Exp_30_19" title="a reference to a single-file definition"><span class="token sort_Id">Exp</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#SyncOption_14_5" id="SyncOption_30_26" title="a reference to a single-file definition"><span class="token sort_Id">SyncOption</span></a></span></span>
    <span class="cons_OpDecl"><span id="SyncACCreate_31_5" title="a definition with no references"><span class="token sort_Id">SyncACCreate</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="../WebDSL-Action-sig.stx/#Exp_25_5" id="Exp_31_20" title="a reference to a single-file definition"><span class="token sort_Id">Exp</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#SyncOption_14_5" id="SyncOption_31_27" title="a reference to a single-file definition"><span class="token sort_Id">SyncOption</span></a></span></span>
</code></pre></td></tr></tbody></table></div>

<div id="modal">
  <div id="modal-content">
    <span id="modal-close">&times;</span>
    <h2 id="modal-h2"></h2>
    <p  id="modal-p"></p>
    <ul id="modal-ul"></ul>
  </div>
</div>
