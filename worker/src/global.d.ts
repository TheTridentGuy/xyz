/// <reference types="@cloudflare/workers-types" />

interface Env {
	DB: D1Database;
	VOTING_SYSTEM: DurableObjectNamespace;
}
