---
title: emails.stx
hide:
  - toc
---

# `emails.stx`

:simple-github: [pdmosses/webdsl-statix/webdslstatix/trans/static-semantics/actions/emails.stx]

[pdmosses/webdsl-statix/webdslstatix/trans/static-semantics/actions/emails.stx]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/trans/static-semantics/actions/emails.stx "The source file on GitHub"

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
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <a href="../../webdsl-actions.stx/#static-semantics/actions/emails_6_3" id="static-semantics/actions/emails_1_8" title="a definition with a single reference"><span class="token sort_Id">static-semantics/actions/emails</span></a>

<span class="keyword">imports</span>
  <a href="../../types/built-ins.stx/#static-semantics/types/built-ins_1_8" id="static-semantics/types/built-ins_4_3" title="a reference to a single-file definition"><span class="token sort_Id">static-semantics/types/built-ins</span></a>

  <a href="../../webdsl.stx/#static-semantics/webdsl_1_8" id="static-semantics/webdsl_6_3" title="a reference to a single-file definition"><span class="token sort_Id">static-semantics/webdsl</span></a>

<span class="keyword">rules</span>

  <a href="../../webdsl.stx/#typeOfExp_388_3" id="typeOfExp_10_3" title="a reference to a single-file definition"><span class="token sort_Id">typeOfExp</span></a><span class="operator">(</span><span class="cons_Var"><span id="s_10_13" title="a definition with no references"><span class="token sort_Id">s</span></span></span><span class="operator">,</span> <span class="cons_Op"><a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx/#SendEmailFunctionCall_189_5" id="SendEmailFunctionCall_10_16" title="a reference to a single-file definition"><span class="token sort_Id">SendEmailFunctionCall</span></a><span class="operator">(</span><span class="cons_Var"><span id="e_10_38" title="a definition with no references"><span class="token sort_Id">e</span></span></span><span class="operator">)</span></span><span class="operator">)</span> <span class="operator">=</span> <a href="../../types/built-ins.stx/#bool_72_3" id="bool_10_44" title="a reference to a single-file definition"><span class="token sort_Id">bool</span></a><span class="operator">(</span><span class="cons_Var">s</span><span class="operator">)</span> <span class="operator">:-</span> <span class="layout">/* TO-DO: implement validation of email call */</span>
    <span class="keyword">try</span> <span class="operator">{</span> <span class="keyword">false</span> <span class="operator">}</span> <span class="operator">|</span> <span class="token sort_Id">warning</span> <span class="operator">$[</span><span class="cons_Text">Static analysis of email call not yet implemented</span><span class="operator">]</span> <span class="operator">.</span>

</code></pre></td></tr></tbody></table></div>

<div id="modal">
  <div id="modal-content">
    <span id="modal-close">&times;</span>
    <h2 id="modal-h2"></h2>
    <p  id="modal-p"></p>
    <ul id="modal-ul"></ul>
  </div>
</div>
