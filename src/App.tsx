import { ThemeProvider } from '@/components/design-system/theme/ThemeProvider';
import Heading from '@/components/design-system/typography/Heading';
import Paragraph from '@/components/design-system/typography/Paragraph';
import Text from '@/components/design-system/typography/Text';
import TextInput from '@/components/design-system/input/TextInput';
import Select from '@/components/design-system/input/Select';
import AlertBanner from '@/components/design-system/feedback/AlertBanner';
import { toast, Toaster } from '@/components/design-system/feedback/Toast';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { MailIcon, SearchIcon } from 'lucide-react';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const showToast = (variant: 'default' | 'info' | 'success' | 'warning' | 'error') => {
    toast({
      title: `${variant.charAt(0).toUpperCase() + variant.slice(1)} Toast`,
      description: `This is a ${variant} notification example`,
      variant,
    });
  };

  return (
    <ThemeProvider defaultTheme={theme}>
      <div className="min-h-screen bg-background text-foreground p-8">
        <div className="container mx-auto max-w-5xl">
          <header className="mb-10 text-center">
            <Heading level={1} align="center" className="mb-4">
              Design System Components
            </Heading>
            <Paragraph size="lg" align="center" className="mb-8">
              A showcase of typography, data entry, and feedback components
            </Paragraph>
            <Button
              onClick={toggleTheme}
              className="mb-6"
            >
              Toggle Theme: {theme === 'light' ? 'Dark' : 'Light'}
            </Button>
          </header>

          <section className="mb-16">
            <Heading level={2} className="mb-6">Typography</Heading>
            
            <div className="space-y-6 mb-8">
              <Heading level={3}>Heading Examples</Heading>
              <Heading level={1}>Heading Level 1</Heading>
              <Heading level={2}>Heading Level 2</Heading>
              <Heading level={3}>Heading Level 3</Heading>
              <Heading level={4}>Heading Level 4</Heading>
              <Heading level={5}>Heading Level 5</Heading>
              <Heading level={6}>Heading Level 6</Heading>
            </div>
            
            <div className="space-y-6 mb-8">
              <Heading level={3}>Paragraph Examples</Heading>
              <Paragraph size="xl">
                Extra Large paragraph for important information or introductions.
              </Paragraph>
              <Paragraph size="lg">
                Large paragraph for highlighted content sections that need emphasis.
              </Paragraph>
              <Paragraph>
                Default paragraph size for most body content. This size offers excellent readability
                for extended sections of text and is suitable for the majority of content.
              </Paragraph>
              <Paragraph size="sm">
                Small paragraph for supporting information, captions, or areas where space is limited.
              </Paragraph>
              <Paragraph size="xs">
                Extra small paragraph for footnotes, legal text, or other minimal emphasis content.
              </Paragraph>
            </div>
            
            <div className="space-y-6">
              <Heading level={3}>Text Component Examples</Heading>
              <div className="grid gap-4">
                <div>
                  <Text variant="label" as="label">Form Field Label</Text>
                  <Paragraph size="sm" className="mt-1">Shows how labels appear above form fields</Paragraph>
                </div>
                <div>
                  <Text variant="caption">Image or Element Caption</Text>
                  <Paragraph size="sm" className="mt-1">Used for captions under images or UI elements</Paragraph>
                </div>
                <div>
                  <Text variant="helper">Helper text provides additional context</Text>
                  <Paragraph size="sm" className="mt-1">Used for form helpers or contextual information</Paragraph>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <Heading level={2} className="mb-6">Data Entry Components</Heading>
            
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-6">
                <Heading level={3}>Text Input</Heading>
                <TextInput 
                  label="Default Input"
                  placeholder="Enter text..."
                  fullWidth
                />
                <TextInput 
                  label="With Helper Text"
                  placeholder="Enter your username"
                  helperText="Username must be 3-16 characters"
                  fullWidth
                />
                <TextInput 
                  label="With Error"
                  placeholder="Enter email"
                  errorMessage="Please enter a valid email address"
                  fullWidth
                />
                <TextInput 
                  label="With Icon"
                  placeholder="Search..."
                  leftIcon={<SearchIcon className="h-4 w-4" />}
                  fullWidth
                />
                <TextInput 
                  label="Email Input"
                  placeholder="Enter your email"
                  type="email"
                  leftIcon={<MailIcon className="h-4 w-4" />}
                  fullWidth
                />
                <TextInput 
                  label="Disabled Input"
                  placeholder="Cannot be edited"
                  disabled
                  fullWidth
                />
              </div>
              
              <div className="space-y-6">
                <Heading level={3}>Select Dropdown</Heading>
                <Select 
                  label="Default Select"
                  placeholder="Choose an option"
                  options={[
                    { value: "option1", label: "Option 1" },
                    { value: "option2", label: "Option 2" },
                    { value: "option3", label: "Option 3" },
                  ]}
                  fullWidth
                />
                <Select 
                  label="With Helper Text"
                  placeholder="Select country"
                  helperText="Select your country of residence"
                  options={[
                    { value: "us", label: "United States" },
                    { value: "ca", label: "Canada" },
                    { value: "mx", label: "Mexico" },
                    { value: "uk", label: "United Kingdom" },
                  ]}
                  fullWidth
                />
                <Select 
                  label="With Error"
                  placeholder="Select an option"
                  errorMessage="Please select a valid option"
                  options={[
                    { value: "option1", label: "Option 1" },
                    { value: "option2", label: "Option 2" },
                    { value: "option3", label: "Option 3" },
                  ]}
                  fullWidth
                />
                <Select 
                  label="With Disabled Options"
                  placeholder="Select a service"
                  options={[
                    { value: "standard", label: "Standard Delivery" },
                    { value: "express", label: "Express Delivery" },
                    { value: "next-day", label: "Next Day Delivery" },
                    { value: "same-day", label: "Same Day Delivery", disabled: true },
                  ]}
                  fullWidth
                />
                <Select 
                  label="Disabled Select"
                  placeholder="Cannot select"
                  disabled
                  options={[
                    { value: "option1", label: "Option 1" },
                    { value: "option2", label: "Option 2" },
                  ]}
                  fullWidth
                />
              </div>
            </div>
          </section>

          <section className="mb-16">
            <Heading level={2} className="mb-6">Feedback Components</Heading>
            
            <div className="space-y-6 mb-8">
              <Heading level={3}>Alert Banners</Heading>
              <div className="grid gap-4">
                <AlertBanner
                  variant="info"
                  title="Information"
                  description="This is an informational alert with neutral context."
                />
                <AlertBanner
                  variant="success"
                  title="Success"
                  description="Your action has been completed successfully."
                />
                <AlertBanner
                  variant="warning"
                  title="Warning"
                  description="This action may have consequences. Please proceed with caution."
                />
                <AlertBanner
                  variant="error"
                  title="Error"
                  description="There was a problem with your request. Please try again."
                />
                <AlertBanner
                  variant="info"
                  title="Dismissible Alert"
                  description="This alert can be dismissed by clicking the X button."
                  onClose={() => console.log("Alert dismissed")}
                />
                <AlertBanner
                  variant="warning"
                  title="With Action"
                  description="This alert has an action button."
                  action={<Button size="sm">Take Action</Button>}
                />
              </div>
            </div>
            
            <div className="space-y-6">
              <Heading level={3}>Toast Notifications</Heading>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Button onClick={() => showToast("default")}>Default Toast</Button>
                <Button onClick={() => showToast("info")}>Info Toast</Button>
                <Button onClick={() => showToast("success")}>Success Toast</Button>
                <Button onClick={() => showToast("warning")}>Warning Toast</Button>
                <Button onClick={() => showToast("error")}>Error Toast</Button>
                <Button 
                  onClick={() => toast({
                    title: "Action Required",
                    description: "Please confirm or dismiss this notification",
                    variant: "info",
                    action: <Button size="sm" variant="outline">Confirm</Button>
                  })}
                >
                  Toast with Action
                </Button>
              </div>
              <Toaster />
            </div>
          </section>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;