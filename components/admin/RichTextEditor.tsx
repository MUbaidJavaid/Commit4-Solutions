import Image from '@tiptap/extension-image'
import Link from '@tiptap/extension-link'
import Placeholder from '@tiptap/extension-placeholder'
import TextAlign from '@tiptap/extension-text-align'
import Underline from '@tiptap/extension-underline'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Code,
  Heading1,
  Heading2,
  Heading3,
  Image as ImageIcon,
  Italic,
  Link as LinkIcon,
  List,
  ListOrdered,
  Minus,
  Quote,
  Redo,
  Strikethrough,
  Underline as UnderlineIcon,
  Undo
} from 'lucide-react'
import { useCallback, useEffect } from 'react'

interface Props {
  content: string
  onChange: (html: string) => void
}

function ToolbarButton ({
  active,
  onClick,
  children,
  title
}: {
  active?: boolean
  onClick: () => void
  children: React.ReactNode
  title: string
}) {
  return (
    <button
      type='button'
      onClick={onClick}
      title={title}
      className={`p-1.5 rounded-lg transition-all ${
        active
          ? 'bg-accent/20 text-accent'
          : 'text-white/40 hover:text-white/70 hover:bg-white/5'
      }`}
    >
      {children}
    </button>
  )
}

export default function RichTextEditor ({ content, onChange }: Props) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [1, 2, 3] }
      }),
      Underline,
      Image.configure({ inline: false, allowBase64: true }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: { class: 'text-accent underline' }
      }),
      Placeholder.configure({ placeholder: 'Start writing your article...' }),
      TextAlign.configure({ types: ['heading', 'paragraph'] })
    ],
    content,
    editorProps: {
      attributes: {
        class:
          'prose prose-invert prose-sm max-w-none min-h-[350px] px-5 py-4 focus:outline-none text-white/80 font-body text-sm leading-relaxed [&_h1]:text-2xl [&_h1]:font-heading [&_h1]:font-bold [&_h1]:text-white [&_h2]:text-xl [&_h2]:font-heading [&_h2]:font-bold [&_h2]:text-white [&_h3]:text-lg [&_h3]:font-heading [&_h3]:font-semibold [&_h3]:text-white/90 [&_blockquote]:border-l-2 [&_blockquote]:border-accent/40 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-white/50 [&_code]:bg-white/10 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-xs [&_code]:font-mono [&_pre]:bg-white/5 [&_pre]:rounded-xl [&_pre]:p-4 [&_a]:text-accent [&_a]:underline [&_hr]:border-white/10 [&_img]:rounded-xl [&_img]:my-4 [&_ul]:list-disc [&_ol]:list-decimal [&_li]:text-white/70'
      }
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML())
    }
  })

  useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      editor.commands.setContent(content)
    }
  }, [content])

  const addImage = useCallback(() => {
    const url = window.prompt('Image URL:')
    if (url && editor) {
      editor.chain().focus().setImage({ src: url }).run()
    }
  }, [editor])

  const addLink = useCallback(() => {
    if (!editor) return
    const prev = editor.getAttributes('link').href
    const url = window.prompt('URL:', prev)
    if (url === null) return
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run()
      return
    }
    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
  }, [editor])

  if (!editor) return null

  const s = 14

  return (
    <div className='rounded-xl border border-white/10 overflow-hidden bg-white/[0.02]'>
      {/* Toolbar */}
      <div className='flex flex-wrap items-center gap-0.5 px-3 py-2 border-b border-white/10 bg-white/[0.03]'>
        <ToolbarButton
          title='Undo'
          onClick={() => editor.chain().focus().undo().run()}
        >
          <Undo size={s} />
        </ToolbarButton>
        <ToolbarButton
          title='Redo'
          onClick={() => editor.chain().focus().redo().run()}
        >
          <Redo size={s} />
        </ToolbarButton>

        <div className='w-px h-5 bg-white/10 mx-1' />

        <ToolbarButton
          title='Heading 1'
          active={editor.isActive('heading', { level: 1 })}
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
        >
          <Heading1 size={s} />
        </ToolbarButton>
        <ToolbarButton
          title='Heading 2'
          active={editor.isActive('heading', { level: 2 })}
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
        >
          <Heading2 size={s} />
        </ToolbarButton>
        <ToolbarButton
          title='Heading 3'
          active={editor.isActive('heading', { level: 3 })}
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
        >
          <Heading3 size={s} />
        </ToolbarButton>

        <div className='w-px h-5 bg-white/10 mx-1' />

        <ToolbarButton
          title='Bold'
          active={editor.isActive('bold')}
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          <Bold size={s} />
        </ToolbarButton>
        <ToolbarButton
          title='Italic'
          active={editor.isActive('italic')}
          onClick={() => editor.chain().focus().toggleItalic().run()}
        >
          <Italic size={s} />
        </ToolbarButton>
        <ToolbarButton
          title='Underline'
          active={editor.isActive('underline')}
          onClick={() => editor.chain().focus().toggleUnderline().run()}
        >
          <UnderlineIcon size={s} />
        </ToolbarButton>
        <ToolbarButton
          title='Strikethrough'
          active={editor.isActive('strike')}
          onClick={() => editor.chain().focus().toggleStrike().run()}
        >
          <Strikethrough size={s} />
        </ToolbarButton>
        <ToolbarButton
          title='Code'
          active={editor.isActive('code')}
          onClick={() => editor.chain().focus().toggleCode().run()}
        >
          <Code size={s} />
        </ToolbarButton>

        <div className='w-px h-5 bg-white/10 mx-1' />

        <ToolbarButton
          title='Bullet List'
          active={editor.isActive('bulletList')}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
        >
          <List size={s} />
        </ToolbarButton>
        <ToolbarButton
          title='Ordered List'
          active={editor.isActive('orderedList')}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
        >
          <ListOrdered size={s} />
        </ToolbarButton>
        <ToolbarButton
          title='Blockquote'
          active={editor.isActive('blockquote')}
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
        >
          <Quote size={s} />
        </ToolbarButton>
        <ToolbarButton
          title='Horizontal Rule'
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
        >
          <Minus size={s} />
        </ToolbarButton>

        <div className='w-px h-5 bg-white/10 mx-1' />

        <ToolbarButton
          title='Align Left'
          active={editor.isActive({ textAlign: 'left' })}
          onClick={() => editor.chain().focus().setTextAlign('left').run()}
        >
          <AlignLeft size={s} />
        </ToolbarButton>
        <ToolbarButton
          title='Align Center'
          active={editor.isActive({ textAlign: 'center' })}
          onClick={() => editor.chain().focus().setTextAlign('center').run()}
        >
          <AlignCenter size={s} />
        </ToolbarButton>
        <ToolbarButton
          title='Align Right'
          active={editor.isActive({ textAlign: 'right' })}
          onClick={() => editor.chain().focus().setTextAlign('right').run()}
        >
          <AlignRight size={s} />
        </ToolbarButton>

        <div className='w-px h-5 bg-white/10 mx-1' />

        <ToolbarButton title='Insert Image' onClick={addImage}>
          <ImageIcon size={s} />
        </ToolbarButton>
        <ToolbarButton
          title='Insert Link'
          active={editor.isActive('link')}
          onClick={addLink}
        >
          <LinkIcon size={s} />
        </ToolbarButton>
      </div>

      {/* Editor */}
      <EditorContent editor={editor} />
    </div>
  )
}
