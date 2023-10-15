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
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl-statix-sig.stx/#signatures/WebDSL-Service-sig_675_704" id="signatures/WebDSL-Service-sig_7_36" title="Referenced at ../webdsl-statix-sig.stx line 23"><span class="token sort_Id">signatures/WebDSL-Service-sig</span></a>

<span class="keyword">imports</span>
  <a href="../WebDSL-Action-sig.stx/#signatures/WebDSL-Action-sig_7_35" id="signatures/WebDSL-Action-sig_48_76" title="Defined at ../WebDSL-Action-sig.stx line 1"><span class="token sort_Id">signatures/WebDSL-Action-sig</span></a>
  <a href="../WebDSL-Core-sig.stx/#signatures/WebDSL-Core-sig_7_33" id="signatures/WebDSL-Core-sig_79_105" title="Defined at ../WebDSL-Core-sig.stx line 1"><span class="token sort_Id">signatures/WebDSL-Core-sig</span></a>
  <a href="../WebDSL-Lexical-sig.stx/#signatures/WebDSL-Lexical-sig_7_36" id="signatures/WebDSL-Lexical-sig_108_137" title="Defined at ../WebDSL-Lexical-sig.stx line 1"><span class="token sort_Id">signatures/WebDSL-Lexical-sig</span></a>
  <a href="../WebDSL-UI-sig.stx/#signatures/WebDSL-UI-sig_7_31" id="signatures/WebDSL-UI-sig_140_164" title="Defined at ../WebDSL-UI-sig.stx line 1"><span class="token sort_Id">signatures/WebDSL-UI-sig</span></a>
  <a href="../WebDSL-DataModel-sig.stx/#signatures/WebDSL-DataModel-sig_7_38" id="signatures/WebDSL-DataModel-sig_167_198" title="Defined at ../WebDSL-DataModel-sig.stx line 1"><span class="token sort_Id">signatures/WebDSL-DataModel-sig</span></a>

<span class="keyword">signature</span>

  <span class="keyword">sorts</span>
    <span class="cons_SortDecl"><a href="#SyncConfigEmbedded_304_322" id="SyncConfigEmbedded_223_241" title="Referenced at line 17, 25, 26"><span class="token sort_Id">SyncConfigEmbedded</span></a></span>
    <span class="cons_SortDecl"><a href="#SyncOption_346_356" id="SyncOption_246_256" title="Referenced at line 18, 26, 27, 28, 29, 30, 31"><span class="token sort_Id">SyncOption</span></a></span>

  <span class="keyword">constructors</span>
    <span class="cons_OpDecl"><span id="SyncConfigEmbedded-Plhdr_277_301" title="Not referenced locally, nor via imports"><span class="token sort_Id">SyncConfigEmbedded-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#SyncConfigEmbedded_223_241" id="SyncConfigEmbedded_304_322" title="Defined at line 13"><span class="token sort_Id">SyncConfigEmbedded</span></a></span></span>
    <span class="cons_OpDecl"><span id="SyncOption-Plhdr_327_343" title="Not referenced locally, nor via imports"><span class="token sort_Id">SyncOption-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#SyncOption_246_256" id="SyncOption_346_356" title="Defined at line 14"><span class="token sort_Id">SyncOption</span></a></span></span>

<span class="keyword">signature</span>

  <span class="keyword">constructors</span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/webdsl-services.stx/#ServiceFunction_275_290" id="ServiceFunction_388_403" title="Referenced at ../../../../trans/static-semantics/webdsl-services.stx line 14"><span class="token sort_Id">ServiceFunction</span></a> <span class="operator">:</span> <span class="keyword">list</span><span class="operator">(</span><span class="cons_SimpleSort"><a href="../WebDSL-UI-sig.stx/#Modifier_243_251" id="Modifier_411_419" title="Defined at ../WebDSL-UI-sig.stx line 14"><span class="token sort_Id">Modifier</span></a></span><span class="operator">)</span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="../WebDSL-Lexical-sig.stx/#Id_194_196" id="Id_423_425" title="Defined at ../WebDSL-Lexical-sig.stx line 14"><span class="token sort_Id">Id</span></a></span> <span class="operator">*</span> <span class="keyword">list</span><span class="operator">(</span><span class="cons_SimpleSort"><a href="../WebDSL-Core-sig.stx/#FormalArg_164_173" id="FormalArg_433_442" title="Defined at ../WebDSL-Core-sig.stx line 11"><span class="token sort_Id">FormalArg</span></a></span><span class="operator">)</span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="../WebDSL-Action-sig.stx/#Block_255_260" id="Block_446_451" title="Defined at ../WebDSL-Action-sig.stx line 15"><span class="token sort_Id">Block</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="../WebDSL-Core-sig.stx/#Definition_310_320" id="Definition_455_465" title="Defined at ../WebDSL-Core-sig.stx line 20"><span class="token sort_Id">Definition</span></a></span></span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/webdsl-services.stx/#DeriveWebServices_168_185" id="DeriveWebServices_470_487" title="Referenced at ../../../../trans/static-semantics/webdsl-services.stx line 12"><span class="token sort_Id">DeriveWebServices</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="../WebDSL-Lexical-sig.stx/#Id_194_196" id="Id_490_492" title="Defined at ../WebDSL-Lexical-sig.stx line 14"><span class="token sort_Id">Id</span></a></span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="../WebDSL-Lexical-sig.stx/#Id_194_196" id="Id_495_497" title="Defined at ../WebDSL-Lexical-sig.stx line 14"><span class="token sort_Id">Id</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="../WebDSL-Core-sig.stx/#Definition_310_320" id="Definition_501_511" title="Defined at ../WebDSL-Core-sig.stx line 20"><span class="token sort_Id">Definition</span></a></span></span>
    <span class="cons_OpDecl"><span id="SyncConfigEmbedded2EntityBodyDeclaration_516_556" title="Not referenced locally, nor via imports"><span class="token sort_Id">SyncConfigEmbedded2EntityBodyDeclaration</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#SyncConfigEmbedded_223_241" id="SyncConfigEmbedded_559_577" title="Defined at line 13"><span class="token sort_Id">SyncConfigEmbedded</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="../WebDSL-DataModel-sig.stx/#EntityBodyDeclaration_164_185" id="EntityBodyDeclaration_581_602" title="Defined at ../WebDSL-DataModel-sig.stx line 11"><span class="token sort_Id">EntityBodyDeclaration</span></a></span></span>
    <span class="cons_OpDecl"><span id="SyncConfigEmbedded_607_625" title="Not referenced locally, nor via imports"><span class="token sort_Id">SyncConfigEmbedded</span></span> <span class="operator">:</span> <span class="keyword">list</span><span class="operator">(</span><span class="cons_SimpleSort"><a href="#SyncOption_246_256" id="SyncOption_633_643" title="Defined at line 14"><span class="token sort_Id">SyncOption</span></a></span><span class="operator">)</span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#SyncConfigEmbedded_223_241" id="SyncConfigEmbedded_648_666" title="Defined at line 13"><span class="token sort_Id">SyncConfigEmbedded</span></a></span></span>
    <span class="cons_OpDecl"><span id="SyncTopLevelNameProperty_671_695" title="Not referenced locally, nor via imports"><span class="token sort_Id">SyncTopLevelNameProperty</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="../WebDSL-Lexical-sig.stx/#Id_194_196" id="Id_698_700" title="Defined at ../WebDSL-Lexical-sig.stx line 14"><span class="token sort_Id">Id</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#SyncOption_246_256" id="SyncOption_704_714" title="Defined at line 14"><span class="token sort_Id">SyncOption</span></a></span></span>
    <span class="cons_OpDecl"><span id="SyncRestrictedProperties_719_743" title="Not referenced locally, nor via imports"><span class="token sort_Id">SyncRestrictedProperties</span></span> <span class="operator">:</span> <span class="keyword">list</span><span class="operator">(</span><span class="cons_SimpleSort"><a href="../WebDSL-Lexical-sig.stx/#Id_194_196" id="Id_751_753" title="Defined at ../WebDSL-Lexical-sig.stx line 14"><span class="token sort_Id">Id</span></a></span><span class="operator">)</span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#SyncOption_246_256" id="SyncOption_758_768" title="Defined at line 14"><span class="token sort_Id">SyncOption</span></a></span></span>
    <span class="cons_OpDecl"><span id="SyncACRead_773_783" title="Not referenced locally, nor via imports"><span class="token sort_Id">SyncACRead</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="../WebDSL-Action-sig.stx/#Exp_404_407" id="Exp_786_789" title="Defined at ../WebDSL-Action-sig.stx line 25"><span class="token sort_Id">Exp</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#SyncOption_246_256" id="SyncOption_793_803" title="Defined at line 14"><span class="token sort_Id">SyncOption</span></a></span></span>
    <span class="cons_OpDecl"><span id="SyncACWrite_808_819" title="Not referenced locally, nor via imports"><span class="token sort_Id">SyncACWrite</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="../WebDSL-Action-sig.stx/#Exp_404_407" id="Exp_822_825" title="Defined at ../WebDSL-Action-sig.stx line 25"><span class="token sort_Id">Exp</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#SyncOption_246_256" id="SyncOption_829_839" title="Defined at line 14"><span class="token sort_Id">SyncOption</span></a></span></span>
    <span class="cons_OpDecl"><span id="SyncACCreate_844_856" title="Not referenced locally, nor via imports"><span class="token sort_Id">SyncACCreate</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="../WebDSL-Action-sig.stx/#Exp_404_407" id="Exp_859_862" title="Defined at ../WebDSL-Action-sig.stx line 25"><span class="token sort_Id">Exp</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#SyncOption_246_256" id="SyncOption_866_876" title="Defined at line 14"><span class="token sort_Id">SyncOption</span></a></span></span>
</code></pre></td></tr></tbody></table></div>