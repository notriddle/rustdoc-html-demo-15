searchState.loadedDescShard("rustfix", 0, "Library for applying diagnostic suggestions to source code.\nRepresents a code fix. This doesn’t write to disks but …\nEverything is included. YOLO!\nA filter to control which suggestion should be applied.\nFor <code>diagnostics::Applicability::MachineApplicable</code> only.\nRepresents a replacement of a <code>snippet</code>.\nRepresents code that will get replaced.\nSolution to a diagnostic item.\nAn error/warning and possible solutions for fixing it\nApplies a suggestion to the code.\nApplies an individual solution from a <code>Suggestion</code>.\nApplies multiple <code>suggestions</code> to the given <code>code</code>, handling …\nConverts a <code>DiagnosticSpan</code> into a <code>Replacement</code>.\nCollects code <code>Suggestion</code>s from a single compiler …\nRustc Diagnostic JSON Output.\nError types.\nGets the result of the “fixed” code.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCollects code <code>Suggestion</code>s from one or more compiler …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe error message of the diagnostic item.\nReturns whether or not the data has been modified.\nWhether or not the data has been modified.\nCreates a <code>CodeFix</code> with the source of a file to modify.\nA small module giving you a simple container that allows …\nThe replacement of the snippet.\nPossible solutions to fix the error.\nCode snippet that gets replaced.\nConverts a <code>DiagnosticSpan</code> to a <code>Snippet</code>.\nWhether the modification exactly matches (both range and …\nThe location of the intended replacement.\nIndicates the confidence in the correctness of a …\nThe root diagnostic JSON output emitted by the compiler.\nThe error code emitted by the compiler. See Rust error …\nSpan information of a diagnostic item.\nSpan information of a single line.\nSpan information for macro expansions.\nThe suggestion contains placeholders like <code>(...)</code> or …\nThe suggestion is definitely what the user intended, or …\nThe suggestion may be what the user intended, but it is …\nThe applicability of the suggestion is unknown.\nAssociated diagnostic messages.\nThe code itself.\n1-based, character offset.\nspan where macro was defined (if known)\nMacro invocations that created the code at this span, if …\nAn explanation for the code.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\n1-based, character offset in self.text.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nIs this a “primary” span – meaning the point, or one …\nLabel that should be placed at this location (if any)\n“error: internal compiler error”, “error”, “…\n1-based.\nname of macro that was applied (e.g., “foo!” or “#[…\nThe primary error message.\nThe message as rustc would render it.\nspan where macro was applied to generate this code; note …\nIf we are suggesting a replacement, this will contain text …\nIf the suggestion is approximate\nSource text from the start of line_start to the end of …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nWhether the modification exactly matches (both range and …\nThe location of the intended replacement.\nA container that allows easily replacing chunks of its …\nData that should replace a particular range of the …\nCommit the current changes.\nWhether this data is committed or provisional.\nNew data to insert at the <code>start</code> position of the <code>original</code> …\nReturns <code>true</code> if and only if this <code>Span</code> and <code>other</code> have the …\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns <code>true</code> if and only if this is a “pure” insertion,\nCreate a new data container from a slice of bytes\nOriginal data.\n<code>Span</code>s covering the full range of the original data. …\nSpan of the parent data to be replaced, inclusive of the …\nRecord a provisional change.\nDiscard uncommitted changes.\nMerge the original data with changes, <strong>including</strong> …")