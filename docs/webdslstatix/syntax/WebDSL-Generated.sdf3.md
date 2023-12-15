---
title: WebDSL-Generated.sdf3
hide:
  - toc
---

# `WebDSL-Generated.sdf3`

:simple-github: [pdmosses/webdsl-statix/webdslstatix/syntax/WebDSL-Generated.sdf3]

[pdmosses/webdsl-statix/webdslstatix/syntax/WebDSL-Generated.sdf3]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/syntax/WebDSL-Generated.sdf3 "The source file on GitHub"

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
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl-statix.sdf3/#WebDSL-Generated_15_3" id="WebDSL-Generated_1_8" title="Referenced at ../webdsl-statix.sdf3 line 15">WebDSL-Generated</a>

<span class="keyword">imports</span>
  <a href="../WebDSL-Core.sdf3/#WebDSL-Core_1_8" id="WebDSL-Core_4_3" title="Defined at ../WebDSL-Core.sdf3 line 1">WebDSL-Core</a>
  <a href="../WebDSL-Lexical.sdf3/#WebDSL-Lexical_1_8" id="WebDSL-Lexical_5_3" title="Defined at ../WebDSL-Lexical.sdf3 line 1">WebDSL-Lexical</a>

/*
  <span class="keyword">Add sort and constructors for elements that can be generated durig the desugaring phase</span>.
  <span class="keyword">This is a workaround for the lack of string manipulation in Statix at the time of writing</span>.

  <span class="keyword">The GeneratedElement is never supposed to be the result of parsing</span>.
*/

<span class="keyword">context-free sorts</span>

  <a href="#GeneratedElement_22_38" id="GeneratedElement_16_3" title="Referenced at line 22, 23, 27, 28">GeneratedElement</a>

<span class="keyword">context-free syntax</span>

  <a href="#GeneratedElement_22_38" id="GeneratedElement_20_3" title="Referenced at line 22, 23, 27, 28">GeneratedElement</a>.<span class="cons_Constructor"><a href="#Generated_27_58" id="Generated_20_20" title="Referenced at line 27, 28">Generated</a></span> = &lt;&lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_20_34" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>*&gt;&gt;

  <a href="#Definition_27_3" id="Definition_22_3" title="Referenced at line 27">Definition</a>.<span class="cons_Constructor"><a href="#GeneratedDefinition_27_14" id="GeneratedDefinition_22_14" title="Referenced at line 27">GeneratedDefinition</a></span> = &lt;&lt;<a href="#GeneratedElement_16_3" id="GeneratedElement_22_38" title="Defined at line 16, 20">GeneratedElement</a>&gt;&gt;
  <a href="#EntityBodyDeclaration_28_3" id="EntityBodyDeclaration_23_3" title="Referenced at line 28">EntityBodyDeclaration</a>.<span class="cons_Constructor"><a href="#GeneratedEntityBodyDeclaration_28_25" id="GeneratedEntityBodyDeclaration_23_25" title="Referenced at line 28">GeneratedEntityBodyDeclaration</a></span> = &lt;&lt;<a href="#GeneratedElement_16_3" id="GeneratedElement_23_60" title="Defined at line 16, 20">GeneratedElement</a>&gt;&gt;

<span class="keyword">context-free priorities</span>

  <a href="#Definition_22_3" id="Definition_27_3" title="Defined at line 22">Definition</a>.<span class="cons_Constructor"><a href="#GeneratedDefinition_22_14" id="GeneratedDefinition_27_14" title="Defined at line 22">GeneratedDefinition</a></span> &lt;0&gt; .&gt; <a href="#GeneratedElement_16_3" id="GeneratedElement_27_41" title="Defined at line 16, 20">GeneratedElement</a>.<span class="cons_Constructor"><a href="#Generated_20_20" id="Generated_27_58" title="Defined at line 20">Generated</a></span>,
  <a href="#EntityBodyDeclaration_23_3" id="EntityBodyDeclaration_28_3" title="Defined at line 23">EntityBodyDeclaration</a>.<span class="cons_Constructor"><a href="#GeneratedEntityBodyDeclaration_23_25" id="GeneratedEntityBodyDeclaration_28_25" title="Defined at line 23">GeneratedEntityBodyDeclaration</a></span> &lt;0&gt; .&gt; <a href="#GeneratedElement_16_3" id="GeneratedElement_28_63" title="Defined at line 16, 20">GeneratedElement</a>.<span class="cons_Constructor"><a href="#Generated_20_20" id="Generated_28_80" title="Defined at line 20">Generated</a></span>

</code></pre></td></tr></tbody></table></div>

<div id="modal">
  <div id="modal-content">
    <span id="modal-close">&times;</span>
    <h2 id="modal-h2"></h2>
    <p  id="modal-p"></p>
    <ul id="modal-ul"></ul>
  </div>
</div>
