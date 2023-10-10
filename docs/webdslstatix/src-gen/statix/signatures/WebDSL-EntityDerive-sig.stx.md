---
title: WebDSL-EntityDerive-sig.stx
hide:
  - toc
---

# `WebDSL-EntityDerive-sig.stx`



[pdmosses/webdsl-statix/webdslstatix/src-gen/statix/signatures/WebDSL-EntityDerive-sig.stx]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/src-gen/statix/signatures/WebDSL-EntityDerive-sig.stx "The source file on GitHub"

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
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl-statix-sig.stx/#signatures/WebDSL-EntityDerive-sig_315_349" id="signatures/WebDSL-EntityDerive-sig_7_41" title="Referenced at ../webdsl-statix-sig.stx line 12"><span class="token sort_ModuleID">signatures/WebDSL-EntityDerive-sig</span></a>

<span class="keyword">imports</span>
  <a href="../WebDSL-Action-sig.stx/#signatures/WebDSL-Action-sig_7_35" id="signatures/WebDSL-Action-sig_53_81" title="Defined at ../WebDSL-Action-sig.stx line 1"><span class="token sort_ModuleID">signatures/WebDSL-Action-sig</span></a>
  <a href="../WebDSL-Core-sig.stx/#signatures/WebDSL-Core-sig_7_33" id="signatures/WebDSL-Core-sig_84_110" title="Defined at ../WebDSL-Core-sig.stx line 1"><span class="token sort_ModuleID">signatures/WebDSL-Core-sig</span></a>
  <a href="../WebDSL-Lexical-sig.stx/#signatures/WebDSL-Lexical-sig_7_36" id="signatures/WebDSL-Lexical-sig_113_142" title="Defined at ../WebDSL-Lexical-sig.stx line 1"><span class="token sort_ModuleID">signatures/WebDSL-Lexical-sig</span></a>
  <a href="../WebDSL-UI-sig.stx/#signatures/WebDSL-UI-sig_7_31" id="signatures/WebDSL-UI-sig_145_169" title="Defined at ../WebDSL-UI-sig.stx line 1"><span class="token sort_ModuleID">signatures/WebDSL-UI-sig</span></a>

<span class="keyword">signature</span>

  <span class="keyword">sorts</span>
    <span class="cons_SortDecl"><a href="#ExpEntityDeriveProp_291_310" id="ExpEntityDeriveProp_194_213" title="Referenced at line 16, 21, 22"><span class="token sort_OpId">ExpEntityDeriveProp</span></a></span>
    <a href="#DeriveArgPropId_436_451" id="DeriveArgPropId_218_233" title="Referenced at line 22, 23"><span class="token sort_OpId">DeriveArgPropId</span></a> <span class="operator">=</span> <span class="cons_StringSort">string</span>

  <span class="keyword">constructors</span>
    <span id="ExpEntityDeriveProp-Plhdr_263_288" title="Not referenced locally, nor via imports"><span class="token sort_OpId">ExpEntityDeriveProp-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#ExpEntityDeriveProp_194_213" id="ExpEntityDeriveProp_291_310" title="Defined at line 12"><span class="token sort_OpId">ExpEntityDeriveProp</span></a></span>

<span class="keyword">signature</span>

  <span class="keyword">constructors</span>
    <a href="../../../../trans/static-semantics/ui/template-calls.stx/#ExpEntityDerive_2218_2233" id="ExpEntityDerive_342_357" title="Referenced at ../../../../trans/static-semantics/ui/template-calls.stx line 51"><span class="token sort_OpId">ExpEntityDerive</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="../WebDSL-Action-sig.stx/#Exp_404_407" id="Exp_360_363" title="Defined at ../WebDSL-Action-sig.stx line 25"><span class="token sort_OpId">Exp</span></a></span> <span class="operator">*</span> <span class="keyword">list</span><span class="operator">(</span><span class="cons_SimpleSort"><a href="#ExpEntityDeriveProp_194_213" id="ExpEntityDeriveProp_371_390" title="Defined at line 12"><span class="token sort_OpId">ExpEntityDeriveProp</span></a></span><span class="operator">)</span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="../WebDSL-UI-sig.stx/#TemplateArgExp_343_357" id="TemplateArgExp_395_409" title="Defined at ../WebDSL-UI-sig.stx line 20"><span class="token sort_OpId">TemplateArgExp</span></a></span>
    <span id="ExpEntityDeriveProp_414_433" title="Not referenced locally, nor via imports"><span class="token sort_OpId">ExpEntityDeriveProp</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#DeriveArgPropId_218_233" id="DeriveArgPropId_436_451" title="Defined at line 13"><span class="token sort_OpId">DeriveArgPropId</span></a></span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="../WebDSL-Core-sig.stx/#OptCallArgs_264_275" id="OptCallArgs_454_465" title="Defined at ../WebDSL-Core-sig.stx line 16"><span class="token sort_OpId">OptCallArgs</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#ExpEntityDeriveProp_194_213" id="ExpEntityDeriveProp_469_488" title="Defined at line 12"><span class="token sort_OpId">ExpEntityDeriveProp</span></a></span>
    <span id="ArgEntityDerive_493_508" title="Not referenced locally, nor via imports"><span class="token sort_OpId">ArgEntityDerive</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="../WebDSL-Lexical-sig.stx/#Id_194_196" id="Id_511_513" title="Defined at ../WebDSL-Lexical-sig.stx line 14"><span class="token sort_OpId">Id</span></a></span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="#DeriveArgPropId_218_233" id="DeriveArgPropId_516_531" title="Defined at line 13"><span class="token sort_OpId">DeriveArgPropId</span></a></span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="../WebDSL-Core-sig.stx/#OptFormalArgs_178_191" id="OptFormalArgs_534_547" title="Defined at ../WebDSL-Core-sig.stx line 12"><span class="token sort_OpId">OptFormalArgs</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="../WebDSL-Core-sig.stx/#Sort_280_284" id="Sort_551_555" title="Defined at ../WebDSL-Core-sig.stx line 17"><span class="token sort_OpId">Sort</span></a></span>
    <span id="ForeachElementEntityDerive_560_586" title="Not referenced locally, nor via imports"><span class="token sort_OpId">ForeachElementEntityDerive</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="../WebDSL-Lexical-sig.stx/#Id_194_196" id="Id_589_591" title="Defined at ../WebDSL-Lexical-sig.stx line 14"><span class="token sort_OpId">Id</span></a></span> <span class="operator">*</span> <span class="keyword">list</span><span class="operator">(</span><span class="cons_SimpleSort"><a href="../WebDSL-UI-sig.stx/#TemplateElement_256_271" id="TemplateElement_599_614" title="Defined at ../WebDSL-UI-sig.stx line 15"><span class="token sort_OpId">TemplateElement</span></a></span><span class="operator">)</span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="../WebDSL-UI-sig.stx/#TemplateElement_256_271" id="TemplateElement_619_634" title="Defined at ../WebDSL-UI-sig.stx line 15"><span class="token sort_OpId">TemplateElement</span></a></span>
    <a href="../../../../trans/static-semantics/webdsl-entities.stx/#ForeachStatementEntityDerive_382_410" id="ForeachStatementEntityDerive_639_667" title="Referenced at ../../../../trans/static-semantics/webdsl-entities.stx line 18"><span class="token sort_OpId">ForeachStatementEntityDerive</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="../WebDSL-Lexical-sig.stx/#Id_194_196" id="Id_670_672" title="Defined at ../WebDSL-Lexical-sig.stx line 14"><span class="token sort_OpId">Id</span></a></span> <span class="operator">*</span> <span class="keyword">list</span><span class="operator">(</span><span class="cons_SimpleSort"><a href="../WebDSL-Core-sig.stx/#Statement_350_359" id="Statement_680_689" title="Defined at ../WebDSL-Core-sig.stx line 23"><span class="token sort_OpId">Statement</span></a></span><span class="operator">)</span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="../WebDSL-Core-sig.stx/#Statement_350_359" id="Statement_694_703" title="Defined at ../WebDSL-Core-sig.stx line 23"><span class="token sort_OpId">Statement</span></a></span>
</code></pre></td></tr></tbody></table></div>